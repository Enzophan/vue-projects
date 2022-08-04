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

export interface AddRoom {
    success: boolean,
    room: Room
}

export async function getRooms(): Promise<Rooms> {
    const { data } = await axios.get('/v1/rooms');
    return data
}

export async function addRoom(roomName: string): Promise<AddRoom> {
    const requestBody = {
        roomName
    }
    const { data } = await axios.post('/v1/rooms', requestBody, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}