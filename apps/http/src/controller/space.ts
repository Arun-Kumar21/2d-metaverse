import express from 'express';
import { Request, Response } from 'express';

import client from '@metaverse/db/client';
import { CreateSpaceSchema } from '../types';


export const createSpace = async (req: Request, res: Response): Promise<void> => {
    const parsedData = CreateSpaceSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ message: 'Validation failed' });
        return;
    }

    try {
        if (!parsedData.data.mapId) {
            await client.space.create({
                data: {
                    name: parsedData.data.name,
                    width: parsedData.data.dimensions.split('x')[0],
                    height: parsedData.data.dimensions.split('x')[1],
                },
            });
        } else {

            res.status(400).json({ message: 'Map ID must not be provided' });
            return;
        }

    } catch (error) {
        res.status(400).json({ message: 'Error creating space' });
        return;
    }
}