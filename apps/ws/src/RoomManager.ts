import { OutgoingMessage } from "./type";
import type { User } from "./User";

export class RoomManager {
    rooms: Map<string, User[]> = new Map();

    static Instance: RoomManager;

    private constructor () {
        this.rooms = new Map();
    }

    static getInstance (): RoomManager {
        if (!this.Instance) {
            this.Instance = new RoomManager();
        }
        return this.Instance;
    }

    public addUser (user: User, spaceId: string) {
        if (!this.rooms.has(spaceId)) {
            this.rooms.set(spaceId, [user]);
            return;
        }
        this.rooms.set(spaceId, [...this.rooms.get(spaceId) ?? [], user]);
    }

    public broadcast (message: OutgoingMessage, user: User, roomId: string) {
        if (!this.rooms.has(roomId)){
            return;
        }

        this.rooms.get(roomId)?.forEach((u) => {
            if (u.id !== user.id) {
                u.send(message);
            }
        })

    }
}