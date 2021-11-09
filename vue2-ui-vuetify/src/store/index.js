import Vue from 'vue'
import Vuex from 'vuex'
import foodData from '@/assets/foodData.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbars: [],
    desserts: foodData,
    user: { played_video_ids: ["10010"] },
    tags: [{ id: "111", name: "cake" }, { id: "112", name: "candy" }, { id: "113", name: "cream" }]
  },
  getters: {
    playedVideos: (state) => {
      const user = state.user;
      return user ? user.played_video_ids : [];
    },
    videoIsPlayed: (state, getters) => (videoId) => {
      return getters.playedVideos.includes(videoId)
    },
    getTag: (state) => (tag_id) => {
      return state.tags.find(tag => tag.id === tag_id) || {};
    }
  },
  mutations: {
    SET_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
    MARK_VIDEO_PLAYED(state, itemId) {
      let playedVideos = state.user.played_video_ids.concat(itemId);
      state.user.played_video_ids = playedVideos;
    }
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      snackbar.color = snackbar.color || "success";
      snackbar.timeout = 5000;
      commit('SET_SNACKBAR', snackbar)
    },
    markVideoPlayed({ commit }, itemId) {
      commit('MARK_VIDEO_PLAYED', itemId);
    },
  },
  modules: {
  }
})
