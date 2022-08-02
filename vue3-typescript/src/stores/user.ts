import { computed, reactive } from "vue";
import * as Request from '@/requests'

interface User {
    _id?: string;
    name?: string;
    email?: string;
}


const state = reactive({
    _id: '',
    name: '',
    email: '',
    error: '',
})

const getters = reactive({
    isLoggedIn: computed(() => state.email !== '')
})

const actions = {
    async getUser(): Promise<User> {
        const data = await Request.getUser()
        if (data == null) return {}
        if (data.user) {
            const user = data.user;
            state._id = user._id;
            state.name = user.name;
            state.email = user.email;
            return data.user
        }
        return {}
    },
    async login(email: string, password: string): Promise<boolean> {
        const data = await Request.login(email, password)
        if (data == null) {
            state.error = 'Could not find user.'
            return false
        }
        if (data.user) {
            const user = data.user;
            state.name = user.name;
            state.email = user.email;
            state.error = ''
        }
        return true
    },
    async logout() {
        await Request.logOut();
        state.name = '';
        state.email = '';
    },
    async register(name: string, email: string, password: string): Promise<boolean> {
        const data = await Request.register(name, email, password)
        if (data == null) {
            state.error = 'Could not find user.'
            return false
        }
        if (data.user) {
            return true
        }
        return false
    },
}

export default { state, getters, ...actions }