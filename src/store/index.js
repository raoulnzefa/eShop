import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import counter from './modules/counter'
import layout from './modules/layout'

const debug = process.env.NODE_ENV

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    layout
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
