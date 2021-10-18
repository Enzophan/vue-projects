import { createStore } from "vuex";
import User from '@/store/modules/user'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { user: User },
});


// import Vue from 'vue';
// import Vuex from 'vuex';
// import User from '@/store/modules/user'

// const store = new Vuex.Store({
//   modules: {
//     user: User
//   }
// })

// export default store