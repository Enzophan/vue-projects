import { computed, reactive } from "vue";
import { Room, getRooms, getRoomsById, addRoom, Session } from '@/requests/pocker.api'
import { getResultSession, startSession, endSession, voting } from '@/requests/session.api'

type State = {
    rooms: Array<Room>
    selectedRoom: string,
    roomInfo: Room,
    pockerCards: string[],
    currentSession?: Session
}

const state: State = reactive({
    rooms: [],
    selectedRoom: "",
    roomInfo: {
        _id: "",
        roomName: "",
        adminRoom: "",
        players: [],
        timeCountDown: {
            playing: false,
            status: 'initial',
            endTime: new Date().toISOString()
        },
        listResult: []
    },
    pockerCards: ["0", "1/2", "1", "3", "5", "8", "13", "?"],
    currentSession: {}
})

const getters = reactive({
    selectedRoom: computed(() => state.selectedRoom),
    roomName: computed(() => state.roomInfo.roomName),
    playing: computed(() => state.roomInfo.timeCountDown?.playing),
    roomStatus: computed(() => state.roomInfo.timeCountDown?.status),
    endTime: computed(() => state.roomInfo.timeCountDown?.endTime),
    activeSession: computed(() => state.roomInfo.listResult && state.roomInfo.listResult.length > 0 ? state.roomInfo.listResult.find(session => session.status === 'active') : {}),
})

const actions = {
    setRoom(roomId: string) {
        state.selectedRoom = roomId
    },
    async getRooms(): Promise<void> {
        const data = await getRooms()
        if (data.rooms) {
            state.rooms = data.rooms;
        }
    },
    async getRoomsById(roomId: string): Promise<Room> {
        const data = await getRoomsById(roomId)
        if (data.room) {
            state.roomInfo = data.room;
        }
        if (data.room.listResult) {
            const currentSession = data.room.listResult.find(session => session.status === 'active' || session.status === 'pending');
            if (currentSession) {
                currentSession.results?.forEach(user => {
                    state.roomInfo.players?.map(player => {
                        if (player.userId === user.userId) {
                            player.voted = true;
                            player.point = user.point;
                        }
                    })
                })
            }
            state.currentSession = currentSession;
        }
        return data.room
    },
    async getCurrentSession(): Promise<Session> {
        return state.currentSession ? state.currentSession : {}
    },
    async addRoom(roomName: string): Promise<void> {
        const data = await addRoom(roomName)
        if (data.room) {
            state.rooms = [...state.rooms, data.room]
        }
    },
    addPlayer({ name, userId, clientId }: { name: string, userId: string, clientId: string }) {
        if (userId) {
            const userFound = state.roomInfo.players?.find(player => player.userId === userId)
            if (userFound) {
                state.roomInfo.players?.map(player => {
                    if (player.userId === userId) {
                        player.name = name;
                        player.clientId = clientId;
                    }
                })
            } else {
                state.roomInfo.players?.push({ name, clientId, userId, voted: false, point: "" })
            }
        }
    },
    removePlayer({ userId }: { userId: string }) {
        if (userId) {
            state.roomInfo.players = state.roomInfo.players?.filter(player => player.userId !== userId)
        }
    },
    async startSession(timeLeft: number, story: string): Promise<void> {
        const calculateEndTime = new Date();
        calculateEndTime.setMinutes(calculateEndTime.getMinutes() + timeLeft);
        state.roomInfo.timeCountDown = {
            playing: true,
            status: 'playing',
            endTime: calculateEndTime.toISOString()
        };
        const response = await startSession({
            roomId: state.roomInfo._id,
            story: state.currentSession && state.currentSession.story ? state.currentSession.story : story,
            timeCountDown: state.roomInfo.timeCountDown
        });
        console.log("startSession ", response)

        // Reset list player
        state.roomInfo.players = response.room.players

        // Set current session
        state.currentSession = response.room.result;
        const index = state.roomInfo.listResult?.findIndex(session => session._id === response.room.result?._id);
        console.log("index ", index)
        if (index && index > -1) {
            state.roomInfo.listResult?.map(session => {
                if (session._id === response.room.result?._id) {
                    session = response.room.result || {};
                }
            })
        } else {
            state.roomInfo.listResult?.push(response.room.result || {})
        }
    },
    async endSession(): Promise<void> {
        state.roomInfo.timeCountDown = {
            playing: false,
            status: 'initial'
        }
        const response = await endSession({ roomId: state.roomInfo._id, sessionId: state.currentSession?._id });
        console.log("endSession ", response)

        // Reset list player
        state.roomInfo.players = response.room.players

        state.roomInfo.listResult?.map(session => {
            if (session._id === state.currentSession?._id) {
                state.currentSession = {};
                session = response.room.result || {};
            }
        })
    },
    async getResultSession(sessionId: string): Promise<void> {
        state.roomInfo.timeCountDown = {
            playing: false,
            status: 'pending',
            endTime: new Date().toISOString()
        }
        const response = await getResultSession({ roomId: state.roomInfo._id, sessionId });
        console.log("getResultSession ", response)

        const currentSession = response.room.result;
        if (currentSession) {
            currentSession.results?.forEach(user => {
                state.roomInfo.players?.map(player => {
                    if (player.userId === user.userId) {
                        player.voted = true;
                        player.point = user.point;
                    } else {
                        player.voted = false;
                        player.point = '';
                    }
                })
            })
        }
        state.currentSession = currentSession;
        state.roomInfo.listResult?.map(session => {
            if (session._id === sessionId) {
                session.averagePoint = response.room.result?.averagePoint || '0';
            }
        })
    },
    voting({ userId, point }: { userId: string, point: string }): void {
        voting({ roomId: state.roomInfo._id, userId, point });
        state.roomInfo.listResult?.forEach(session => {
            if (session.status === "active") {
                if (session.results?.findIndex(item => item.userId === userId) === -1) {
                    session.results.push({ userId, point })
                } else {
                    session.results?.map(item => {
                        if (item.userId === userId) item.point = point
                    })
                }
            }
        })

        state.roomInfo.players?.map(player => {
            if (player.userId === userId) {
                player.voted = true;
            }
        })
    }
}

export default { state, getters, ...actions }