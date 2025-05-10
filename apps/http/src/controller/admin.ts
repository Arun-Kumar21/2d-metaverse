import {Request, Response} from 'express';
import { CreateAvatarSchema, CreateElementSchema, CreateMapSchema, UpdateElementSchema } from '../types';

import client from "@metaverse/db/client";


//@desc   Create an element
//@route  POST /api/v1/admin/element

export const createElement = async (req: Request, res: Response) : Promise<void> => {
    const parsedData = CreateElementSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ error: parsedData.error });
        return;
    }

    try {
        const element = await client.element.create({
            data: {
                imageUrl: parsedData.data.imageUrl,
                width: parsedData.data.width,
                height: parsedData.data.height,
                static: parsedData.data.static,
            }
        });

        res.status(201).json({ message: 'Element created successfully', id : element.id });
    } catch (error) {
        console.error('Error creating element:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
};


//@desc   Update an element
//@route  PUT /api/v1/admin/element/:elementId

export const updateElement = async (req: Request, res: Response) : Promise<void> => {
    const { elementId } = req.params;
    const parsedData = UpdateElementSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ error: parsedData.error });
        return;
    }

    try {
        const element = await client.element.update({
            where: { id: elementId },
            data: {
                imageUrl: parsedData.data.imageUrl,
            }
        });

        res.status(200).json({ message: 'Element updated successfully', elementId : element.id });
    } catch (error) {
        console.error('Error updating element:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
};

//@desc   Create an avatar
//@route  POST /api/v1/admin/avatar

export const createAvatar = async (req: Request, res: Response) : Promise<void> => {
    const parsedData = CreateAvatarSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ error: parsedData.error });
        return;
    }

    try {
        const avatar = await client.avatar.create({
            data: {
                name: parsedData.data.name,
                imageUrl: parsedData.data.imageUrl,
            }
        });

        res.status(201).json({ message: 'Avatar created successfully', avatarId : avatar.id });
    } catch (error) {
        console.error('Error creating avatar:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
};

//@desc   Create a map
//@route  POST /api/v1/admin/map

export const createMap = async (req: Request, res: Response) : Promise<void> => {
    const parsedData = CreateMapSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ error: parsedData.error });
        return;
    }
    try {
        const map = await client.map.create({
            data: {
                name: parsedData.data.name,
                thumbnail: parsedData.data.thumbnail,
                width: parseInt(parsedData.data.dimension.split('x')[0]),
                height: parseInt(parsedData.data.dimension.split('x')[1]),
                mapElements: {
                    create: parsedData.data.defaultElements.map((element) => ({
                        elementId: element.elementId,
                        x: element.x,
                        y: element.y,
                    })),
                },
            }
        });

        res.status(201).json({ message: 'Map created successfully', mapId : map.id });
    } catch (error) {
        console.error('Error creating map:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
};
