import { WebSocket } from 'ws';

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

    constructor (private ws: WebSocket) {
        this.id = generateId(10);
    }

    initHandlers () {
        this.ws.on('message', (data) => {
            const parsedData = JSON.parse(data.toString());

            switch (parsedData.type) {
                case 'join': 
                    const spaceId = parsedData.payload.spaceId;
                    RoomManager.getInstance().addUser(this, spaceId);

                    this.send({
                        type: "space-joined",
                        payload : {
                            spawn : {
                                x : Math.floor(Math.random() * 20),
                                y : Math.floor(Math.random() * 20),
                            },
                            user: RoomManager.getInstance().rooms.get(spaceId)?.map((u) => ({id : u.id})) ?? []
                        }
                    })
            }
        });
    }

    send (payload: OutgoingMessage) {
        this.ws.send(JSON.stringify(payload));
    }
}