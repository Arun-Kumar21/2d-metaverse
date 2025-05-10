import express from 'express';
import  { Request, Response } from 'express';

import client from '@metaverse/db/client';
import { AddElementSchema, CreateSpaceSchema, DeleteElementSchema } from '../types';

//@desc     Create a space 
//@route    POST /api/v1/space/

export const createSpace = async (req: Request, res: Response): Promise<void> => {
    const parsedData = CreateSpaceSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json({ message: 'Validation failed' });
        return;
    }

    try {
        if (!parsedData.data.mapId) {
            const space = await client.space.create({
                data: {
                    name: parsedData.data.name,
                    width: parseInt(parsedData.data.dimensions.split('x')[0]),
                    height: parseInt(parsedData.data.dimensions.split('x')[1]),
                    creatorId: req.userId!,
                },
            });
            res.status(201).json({ message: 'Space created successfully', spaceId: space.id });
        } 

        const map = await client.map.findUnique({
            where: {
                id: parsedData.data.mapId,
            },
            select: {
                mapElements: true,
                width: true, 
                height: true,
            }
        });
        if (!map) {
            res.status(404).json({ message: 'Map not found' });
            return;
        }

        const space = await client.$transaction(async () => {
            const space = await client.space.create({
                data: {
                    name: parsedData.data.name,
                    width: map.width,
                    height: map.height,
                    creatorId: req.userId!,
                }
            })

            await client.spaceElements.createMany({
                data: map.mapElements.map((element) => ({
                    spaceId: space.id,
                    elementId: element.elementId,
                    x: element.x!,
                    y: element.y!,
                }))
            })
            return space;
        }) 

        res.status(201).json({ message: 'Space created successfully', spaceId: space.id });
        return;
    } catch (error) {
        res.status(400).json({ message: 'Error creating space' });
        return;
    }
}


//@desc     Delete the space with given spaceId
//@route    DELETE /api/v1/space/:spaceId

export const deleteSpace = async (req: Request, res: Response): Promise<void> => {
    try {
    const space = await client.space.findUnique({
            where: {
                id: req.params.spaceId
            },
            select: {
                creatorId: true
            }
        })

        if (!space) {
            res.status(404).json({ message: 'Space not found' });
            return;
        }

        if (req.userId != space.creatorId) {
            res.status(403).json({message: "Unauthorized"})
            return;
        }

        await client.space.delete({
            where: {
                id: req.params.spaceId
            }
        })

        res.status(200).json({ message: 'Space deleted successfully' });
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log("DELETE_SPACE ERROR:", error);
        return 
    }    
}

//@desc     Get all the spaces created by user
//@route    GET /api/v1/space/all

export const getAllSpace = async (req: Request, res: Response): Promise<void> => {
    try {
        const spaces = await client.space.findMany({
            where: {
                creatorId: req.userId 
            }
        })

        res.json({
            spaces: spaces.map(s => ({
                id: s.id,
                name: s.name,
                thumbnail: s.thumbnail,
                dimension: `${s.width}x${s.height}`
            }))
        })
    } catch (e) {
        res.status(500).json({message: "Internal server error occur"});
        console.log("GET_ALL_SPACE ERROR:", e);
        return;
    }
}

//@desc     Add element in the space
//@route    POST  /api/v1/space/element

export const addElementInSpace = async (req: Request, res: Response) : Promise<void> => {
    const parsedData = AddElementSchema.safeParse(req.body);
    if (!parsedData || !parsedData.data) {
        res.status(400).json({message: "Validation Failed"})
        return;
    }

    try {
        const space = await client.space.findUnique({
            where: {
               creatorId: req.userId,
               id: parsedData.data?.spaceId 
            }, 
            select: {
                width: true,
                height: true
            }
        })

        if (!space) {
            res.status(404).json({message: "Space not found"});
            return;
        }

        await client.spaceElements.create({
            data: {
                spaceId: parsedData.data?.spaceId,
                elementId: parsedData.data?.elementId,
                x: parsedData.data?.x,
                y: parsedData.data?.y,
            }
        })

        res.json({message: "Element created successfully"})

    } catch (e){
        res.status(500).json({message: "Internal server error occur"});
        console.log("CREATE_ELEMENT_IN_SPACE ERROR:", e);
        return;
    }
}


//@desc     Delete element from the space
//@route    DELETE /api/v1/space/element

export const deleteElementFromSpace = async (req: Request, res: Response) : Promise<void> => {
    const parsedData = DeleteElementSchema.safeParse(req.body);
    if (!parsedData || !parsedData.data) {
        res.status(400).json({message: "Validation Failed"});
        return;
    }

    try {
        const spaceElement = await client.spaceElements.findFirst({
            where: {
                id: parsedData.data?.id,
            },
            include: {
                space: true
            }
        })

        if (!spaceElement) {
            res.status(404).json("Space element not found");
            return;
        }

        if (spaceElement.space.creatorId !== req.userId) {
            res.status(403).json({message: "Unauthorized"});
            return;
        }

        await client.spaceElements.delete({
            where: {
                id: parsedData.data.id
            }
        })

        res.status(200).json({message: "Space element deleted succesfully"})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log("DELETE_ELEMENT ERROR", error);
        return;
    }
}


//@desc     Get space with id
//@route    GET /api/v1/space/:spaceId

export const getSpaceWithId = async (req: Request, res: Response) : Promise<void> => {
    try {
        const space = await client.space.findUnique({
            where: {
                id: req.params.spaceId
            },
            include: {
                elements: {
                  include: {
                    element: true
                } 
              }
            }
        })

        if (!space) {
            res.status(404).json({message: "Space not found"});
            return;
        }

        res.json({
            dimension: `${space.width}x${space.height}`,
            elements: space.elements.map(e => ({
                id: e.id,
                element: {
                    id: e.element.id,
                    imageUrl: e.element.imageUrl,
                    width:  e.element.width,
                    height: e.element.height,
                    static: e.element.static
                },
                x: e.x,
                y: e.y
            }))
        })
    } catch (error) {
       res.status(500).json({message: "Internal server error occured"}); 
       console.log("GET_SPACE_WITH_ID ERROR", error);
       return;
    }
}
