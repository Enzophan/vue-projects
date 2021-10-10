import PostService from '../services/PostService.js';

const actions = {
    updateTitle({ commit }, option) {
        console.log('Updte title', option)
        commit('setTitle', option)
    },
    saveNote({ commit }, title) {
        commit('SAVE_NOTE', title)
    },
    getPosts({ commit }) {
        PostService.getPosts()
            .then(response => {
                console.log("SET_POSTS ", response);
                commit('SET_POSTS', response.data)
            })
            .catch(error => {
                console.log("Error ", error)
            })
    },
    getPostDetails({ commit }, option) {
        console.log('getPostDetails', option)
        if (option && option.id) {
            PostService.getPost(option.id)
                .then(response => {
                    console.log("SET_POST_DETAILS ", response);
                    commit('SET_POST_DETAILS', response.data)
                })
                .catch(error => {
                    console.log("Error ", error)
                })
        } else {
            commit('SET_POST_DETAILS')
        }
    }
}

export default actions