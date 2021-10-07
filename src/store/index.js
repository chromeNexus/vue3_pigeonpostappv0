/*
import { createStore } from 'vuex';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
*/
// import Vue  from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
import axios from 'axios'

// Vue.use(Vuex);

// export default new Vuex.Store({
export const store = createStore({
  state: {
    user: null // init val is null... will be set by commit
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}` // Bearer ${userData.token};`; removed semicolon
    },
    /* alt solution
    CLEAR_USER_DATA (state) {
      state.user = null
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization'] = null
    } */

    // force a reload / refresh of page... header credentials will be destroyed... more scalable solution
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          // console.log('user data is:', data)
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          // console.log('user data is:', data)
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user // will return truthiness or falsiness of the value. if userstate is null it will be false..  if user data is in state then true
    }
  }
})
