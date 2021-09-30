const actions = {
    updateTitle({ commit }, option) {
        console.log('Updte title', option)
        commit('setTitle', option)
    },
    saveNote({ commit }, title) {
        commit('SAVE_NOTE', title)
    }
}

export default actions