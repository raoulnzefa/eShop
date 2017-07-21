import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import counter from './modules/counter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV

const store = new Vuex.Store({
  modules: {
    counter
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
