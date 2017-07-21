const types = {
  INCREASE_COUNT: 'INCREASE_COUNT',
  DECREASE_COUNT: 'DECREASE_COUNT',
  RESET_COUNT: 'RESET_COUNT',
  RESET_COUNTING: 'RESET_COUNTING'
}

const state = {
  count: 0,
  isCounting: false,
  time: [0, 0, 0]
}

const mutations = {
  [types.INCREASE_COUNT] ({count}, payload) {
    state.count = count + payload
    state.time[0]++
    state.isCounting = !state.isCounting
  },
  [types.DECREASE_COUNT] ({count}, payload) {
    state.count = count - payload
    state.time[1]++
    state.isCounting = !state.isCounting
  },
  [types.RESET_COUNT] () {
    state.count = 0
    state.time[2]++
    state.isCounting = !state.isCounting
  },
  [types.RESET_COUNTING] () {
    state.isCounting = !state.isCounting
  }
}

const DELAY_TIME = 500
const execHandler = (fn, flag, time = DELAY_TIME) => {
  (flag ? () => {
    setTimeout(fn, time)
  } : fn)()
}

const actions = {
  increase ({state: {isCounting}, commit}, {delay, countSize}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.INCREASE_COUNT, countSize)
      commit(types.RESET_COUNTING)
    }, delay, DELAY_TIME)
  },
  decrease ({state: {isCounting}, commit}, {delay, countSize}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.DECREASE_COUNT, countSize)
      commit(types.RESET_COUNTING)
    }, delay, DELAY_TIME)
  },
  reset ({state: {isCounting}, commit}, {delay}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.RESET_COUNT)
      commit(types.RESET_COUNTING)
    }, delay, DELAY_TIME)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
