const getters = {
    title: (state) => {
        return state.title
    },
    totalNotes(state) {
        return state.notes.length
    },
    posts: (state) => {
        return state.posts
    },
    postDetails: (state) => {
        return state.postDetails
    }
}


export default getters