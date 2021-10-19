import { createStore } from "vuex";
import User from '@/store/modules/user';
import Random from '@/store/modules/random';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { user: User, random: Random },
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