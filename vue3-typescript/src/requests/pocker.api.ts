import axios from "axios";

interface Player {
    clientId: string,
    userId: string,
    name: string,
    voted: boolean,
    point: string
}

interface TimeCountDown {
    playing?: boolean,
    status?: string,
    endTime?: string
}

interface Result {
    userId: string,
    point: string
}

export interface Session {
    _id?: string,
    averagePoint?: string,
    status?: string,
    story?: string,
    roomId?: string,
    results?: [Result],
}

export interface Room {
    _id: string,
    roomName: string,
    adminRoom: string,
    createdTime?: Date,
    users?: Array<string>,
    players?: Array<Player>,
    timeCountDown?: TimeCountDown,
    listResult?: Array<Session>
}

export interface Rooms {
    success: boolean,
    rooms: Array<Room>
}

export interface AddRoom {
    success: boolean,
    room: Room
}

export interface RoomSession {
    success: boolean,
    room: {
        _id: string,
        roomName: string,
        adminRoom: string,
        createdTime?: Date,
        players?: Array<Player>,
        timeCountDown?: TimeCountDown,
        result?: Session
    }
}

export async function getRooms(): Promise<Rooms> {
    const { data } = await axios.get('/v1/rooms');
    return data
}

export async function getRoomsById(roomId: string): Promise<AddRoom> {
    const { data } = await axios.get(`/v1/rooms/${roomId}`);
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