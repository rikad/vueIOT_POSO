import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: 'tes',
    user: '',
    stations: []
  },
  mutations: {

  },
  actions: {
    
  },
  getters: {
    stations: async function(state) {
      if(state.stations.length == 0) {
        let response = await fetch('http://localhost:8000/api/station')
        state.stations = await response.json()        
      }

      return state.stations
    }
  }
})
