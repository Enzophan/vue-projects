import { computed, reactive } from "vue";
import { Room, getRooms, addRoom } from '@/requests/pocker.api'

type State = {
    rooms: Array<Room>
    selectedRoom: string
}

const state: State = reactive({
    rooms: [],
    selectedRoom: ""
})

const getters = reactive({
    selectedRoom: computed(() => state.selectedRoom)
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
    async addRoom(roomName: string): Promise<void> {
        const data = await addRoom(roomName)
        if (data.room) {
            state.rooms = [...state.rooms, data.room]
        }
    }
}

export default { state, getters, ...actions }