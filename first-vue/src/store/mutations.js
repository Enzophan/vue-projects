const mutations = {
    setTitle(state, payload) {
        state.title = payload
    },
    SAVE_NOTE(state, title) {
        state.notes.push(title)
    }
}

export default mutations