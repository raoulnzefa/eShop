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

const execHandler = (fn, flag, time) => {
  (flag ? () => {
    setTimeout(fn, time)
  } : fn)()
}

const actions = {
  increase ({state: {isCounting}, commit}, {delay, countSize, delayTime}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.INCREASE_COUNT, countSize)
      commit(types.RESET_COUNTING)
    }, delay, delayTime)
  },
  decrease ({state: {isCounting}, commit}, {delay, countSize, delayTime}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.DECREASE_COUNT, countSize)
      commit(types.RESET_COUNTING)
    }, delay, delayTime)
  },
  reset ({state: {isCounting}, commit}, {delay, delayTime}) {
    if (isCounting) {
      return false
    }

    execHandler(() => {
      commit(types.RESET_COUNT)
      commit(types.RESET_COUNTING)
    }, delay, delayTime)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
