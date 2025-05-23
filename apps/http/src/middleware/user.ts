import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const userMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return Promise.reject(new Error("Unauthorized")); 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {role: string, userId: string};
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return Promise.reject(new Error("Unauthorized"));
  }
}