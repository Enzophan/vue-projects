const getters = {
    title: (state) => {
        return state.title
    },
    totalNotes(state) {
        return state.notes.length
    }
}


export default getters