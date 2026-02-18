export interface User {
  id: string;
  username: string;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
}

export interface Room {
  id: string;
  name: string;
  users: User[];
}
