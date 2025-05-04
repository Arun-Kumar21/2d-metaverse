import { Request, Response } from 'express';

import client from '@metaverse/db/client';
import { SignupSchema, SigninSchema } from '../types';


export const signup = async(req: Request, res: Response) => {
  const parsedData = SignupSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({message: "Validation failed"})
  }

  try {
    const user = await client.user.create({
      data: {
        username: parsedData.data.username,
        password: parsedData.data.password,
        role: parsedData.data.type === 'Admin' ? "Admin": "User"
      }
    })

    res.json({
      userId: user.id 
    })

  } catch (error) {
    res.status(400).json({message: "User already exists"})
  }
}
