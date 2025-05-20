import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    history: []
  },
  mutations: {
    increment (state) {
      state.count++
      state.history.push({
        type: 'INCREMENT',
        count: state.count,
        timestamp: new Date().toLocaleTimeString()
      })
    },
    decrement (state) {
      state.count--
      state.history.push({
        type: 'DECREMENT',
        count: state.count,
        timestamp: new Date().toLocaleTimeString()
      })
    },
    reset (state) {
      const prevCount = state.count
      state.count = 0
      state.history.push({
        type: 'RESET',
        prevCount,
        count: 0,
        timestamp: new Date().toLocaleTimeString()
      })
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    decrementAsync ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('decrement')
          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    countSquared: state => state.count * state.count,
    recentHistory: state => state.history.slice(-5).reverse()
  }
})
