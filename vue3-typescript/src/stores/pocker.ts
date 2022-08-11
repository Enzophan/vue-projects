import { computed, reactive } from "vue";
import { Room, getRooms, getRoomsById, addRoom } from '@/requests/pocker.api'

type State = {
    rooms: Array<Room>
    selectedRoom: string,
    roomInfo: Room,
    pockerCards: string[]
}

const state: State = reactive({
    rooms: [],
    selectedRoom: "",
    roomInfo: {
        _id: "",
        roomName: "",
        adminRoom: "",
    },
    pockerCards: ["0", "1/2", "1", "3", "5", "8", "13", "?"]
})

const getters = reactive({
    selectedRoom: computed(() => state.selectedRoom),
    roomName: computed(() => state.roomInfo.roomName)
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
    async getRoomsById(roomId: string): Promise<void> {
        const data = await getRoomsById(roomId)
        console.log("getRoomsById ", data)
        if (data.room) {
            state.roomInfo = data.room;
        }
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
                state.roomInfo.players?.push({ name, clientId, userId })
            }
        }
    },
    removePlayer({ userId }: { userId: string }) {
        if (userId) {
            state.roomInfo.players = state.roomInfo.players?.filter(player => player.userId !== userId)
        }
    }
}

export default { state, getters, ...actions }