import axios from "axios";

export interface Room {
    _id: string,
    roomName: string,
    adminRoom: string,
    createdTime: Date,
    users: Array<string>
}

export interface Rooms {
    success: boolean,
    rooms: Array<Room>
}

export async function getRooms(): Promise<Rooms> {
    const { data } = await axios.get('/v1/rooms');
    return data
}