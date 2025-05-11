import { Request, Response } from "express";

import client from "@metaverse/db/client";
import { UpdateMetadataSchema } from "../types";

export const updateUserMetadata = async (
    req: Request,
    res: Response
): Promise<void> => {
    const parsedData = UpdateMetadataSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ message: "Validation failed" });
        return;
    }

    try {
        await client.user.update({
            where: {
                id: req.userId,
            },
            data: {
                avatarId: parsedData.data.avatarId,
            },
        });

        res.json({
            message: "User avatar updated successfully",
        });
    } catch (error) {
        res.status(400).json({ message: "Error updating user avatar" });
        return;
    }
};

export const updateUsersMetadata = async (
    req: Request,
    res: Response
) => {
    const userIdString = (req.query.ids ?? "[]") as string;
    const userIds = (userIdString).slice(1, userIdString.length - 2).split(",");

    const metadata = await client.user.findMany({
        where: {
            id : {
                in: userIds
            }
        }, select: {
            avatar: true,
            id: true
        }
    })

    res.json({
        avatars: metadata.map(m => ({
            userId: m.id,
            imageUrl: m.avatar?.imageUrl,
        })) 
    })
}