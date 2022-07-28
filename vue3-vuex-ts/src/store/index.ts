// Please refer https://dev.to/3vilarthas/vuex-typescript-m4j
// https://www.youtube.com/watch?v=fh0VboqAc8k&list=PLw6zZaiL80AtW4zoFbvI_u04ZNcsgO8nY&index=27&t=483s

import { ActionContext, ActionTree, CommitOptions, createLogger, createStore, DispatchOptions, GetterTree, MutationTree, Store as VuexStore } from 'vuex'

// declare state
export type State = { counter: number }

// set state
const state: State = { counter: 0 };

// mutations and action enums
export enum MutationTypes {
  INC_COUNTER = "SET_COUNTER"
}

export enum ActionTypes {
  INC_COUNTER = "SET_COUNTER"
}

// Mutation Types
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
}

// define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter += payload;
  }
}


// actions
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

// actions interface
export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

// define actions
export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload)
  }
}

// Getters types
export type Getters = {
  doubleCounter(state: State): number;
}

// Getters
export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: state => {
    return state.counter * 2;
  }
}

// setup store type
export type Store = Omit<VuexStore<State>, "commit" | "getters" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}


export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()]
})

export function useStore(): Store {
  return store as Store;
}
// export default createStore({
//   state,
//   mutations: {
//     increment(state, payload) {
//       state.counter++
//     }
//   },
//   actions: {
//     increment({ commit }) {
//       commit("increment")
//     }
//   },
//   getters: {
//     counter(state) {
//       return state.counter;
//     }
//   },
//   modules: {
//   }
// })
