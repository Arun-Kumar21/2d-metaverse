import { Request, Response } from 'express';

import client from '@metaverse/db/client';
import { UpdateMetadataSchema } from '../types';


export const updateUserAvatar = async (req: Request, res: Response): Promise<void> => {
  const parsedData = UpdateMetadataSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: 'Validation failed' });
    return;
  }

  try {
    await client.user.update({
      where: {
        id: req.userId,
      },
      data: {
        avatarId: parsedData.data.avatarId,
      }
    })

    res.json({
      message: 'User avatar updated successfully',
    })
  } catch (error) {
    res.status(400).json({ message: 'Error updating user avatar' });
    return; 
  }
}
