import axios from "axios";
import { RoomSession } from "./pocker.api";

interface StartSession {
    roomId: string,
    story: string | undefined,
    timeCountDown: {
        playing?: boolean,
        status?: string,
        endTime?: string
    }
}

interface GetSession {
    roomId?: string,
    sessionId?: string
}

interface Voting {
    roomId: string,
    userId: string,
    point: string
}

export async function startSession(params: StartSession): Promise<RoomSession> {
    const { data } = await axios.post('/v1/rooms/start-session', params, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}

export async function getResultSession(params: GetSession): Promise<RoomSession> {
    const { data } = await axios.post('/v1/rooms/result-session', params, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}

export async function endSession(params: GetSession): Promise<RoomSession> {
    const { data } = await axios.post('/v1/rooms/end-session', params, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}

export async function voting(params: Voting): Promise<RoomSession> {
    const { data } = await axios.put(`/v1/rooms/voting/${params.roomId}`, params, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}