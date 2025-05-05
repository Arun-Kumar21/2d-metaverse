import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import client from "@metaverse/db/client";
import { SignupSchema, SigninSchema } from "../types";

export const signup = async (req: Request, res: Response): Promise<void> => {
    const parsedData = SignupSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ message: "Validation failed" });
        return;
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    try {
        const user = await client.user.create({
            data: {
                username: parsedData.data.username,
                password: hashedPassword,
                role: parsedData.data.type === "Admin" ? "Admin" : "User",
            },
        });

        res.json({
            userId: user.id,
        });
    } catch (error) {
        res.status(400).json({ message: "User already exists" });
        return;
    }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
    const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ message: "Validation failed" });
        return;
    }

    try {
        const user = await client.user.findUnique({
            where: {
                username: parsedData.data.username,
            },
        });

        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(
            parsedData.data.password,
            user.password
        );
        if (!isPasswordValid) {
            res.status(400).json({ message: "Invalid password" });
            return;
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "7d",
            }
        );

        res.json({
            token: token,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
};
