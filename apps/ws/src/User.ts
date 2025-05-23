import { WebSocket } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken';

import client from "@metaverse/db/src";

import { RoomManager } from './RoomManager';
import { OutgoingMessage } from './type';

function generateId (length: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

export class User {
    public id: string;
    public userId?: string; 
    private spaceId?: string;
    private x: number;
    private y: number;

    constructor (private ws: WebSocket) {
        this.id = generateId(10);
        this.x = 0; 
        this.y = 0;
        this.ws = ws;
        this.initHandlers();
    }

    initHandlers () {
        this.ws.on('message', async (data) => {
            const parsedData = JSON.parse(data.toString());

            switch (parsedData.type) {
                case 'join': 
                    const spaceId = parsedData.payload.spaceId;
                    const token = parsedData.payload.token;
                    const userId = (jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload).userId;
                    if (!userId) {
                        this.ws.close();
                        return;
                    }; 
                    this.userId = userId;

                    RoomManager.getInstance().addUser(this, spaceId);

                    const space = await client.space.findFirst({
                        where: {
                            id: spaceId
                        }
                    })

                    if (!space) {
                        this.ws.close();
                        return;
                    } 

                    this.spaceId = spaceId;
                    this.x = Math.floor(Math.random() * space.width);
                    this.y = Math.floor(Math.random() * space.height);  

                    this.send({
                        type: "space-joined",
                        payload : {
                            spawn : {
                                x : this.x,
                                y : this.y
                            },
                            user: RoomManager.getInstance().rooms.get(spaceId)?.map((u) => ({id : u.id})) ?? []
                        }
                    })

                    RoomManager.getInstance().broadcast({
                        type: "user-joined",
                        payload: {
                            userId: this.userId,
                            x: this.x,
                            y: this.y,
                        }
                    }, this, spaceId)

                    break; 
                case 'move':
                    const moveX = parsedData.payload.x;
                    const moveY = parsedData.payload.y;
                    const xDisplacement = Math.abs(moveX - this.x);   
                    const yDisplacement = Math.abs(moveY - this.y);

                    if ((xDisplacement > 1 && yDisplacement == 0) || (xDisplacement == 0 && yDisplacement > 1)) {
                        this.x = moveX;
                        this.y = moveY;
                        RoomManager.getInstance().broadcast({
                            type: "move",
                            payload: {
                                x: this.x,
                                y: this.y,
                            }
                        }, this, this.spaceId!)
                    }

                    this.send({
                        type: "movement-rejected",
                        payload: {
                            x: this.x,
                            y: this.y,
                        }
                    })
            }
        });
    }

    destroy () { 
        RoomManager.getInstance().broadcast({
            type: "user-left",
            payload: {
                userId: this.userId,
            }
        }, this, this.spaceId!)
        RoomManager.getInstance().removeUser(this, this.spaceId!);
    }

    send (payload: OutgoingMessage) {
        this.ws.send(JSON.stringify(payload));
    }
}