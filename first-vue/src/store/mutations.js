const mutations = {
    setTitle(state, payload) {
        state.title = payload
    },
    SAVE_NOTE(state, title) {
        state.notes.push(title)
    },
    SET_POSTS(state, payload) {
        state.posts = payload;
    },
    SET_POST_DETAILS(state, payload) {
        if (payload) {
            state.postDetails = {
                data: payload,
                loading: false
            };
        } else {
            state.postDetails = {
                data: {},
                loading: true
            };
        }
    }
}

export default mutations