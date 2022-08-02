import { computed, reactive } from "vue";
import { Room, getRooms } from '@/requests/pocker.api'

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
        console.log("data ", data)
        if (data.rooms) {
            state.rooms = data.rooms;
        }
    },
}

export default { state, getters, ...actions }