const types = {
  INCREASE_COUNT: 'INCREASE_COUNT',
  DECREASE_COUNT: 'DECREASE_COUNT',
  RESET_COUNT: 'RESET_COUNT',
  SWITCH_DELAY: 'SWITCH_DELAY',
  RESET_COUNTING: 'RESET_COUNTING'
}

const state = {
  count: 0,
  isDelay: false,
  isCounting: false,
  time: [0, 0, 0]
}

const mutations = {
  [types.INCREASE_COUNT] ({count}, payload) {
    state.count = count + payload
    state.time[0]++
  },
  [types.DECREASE_COUNT] ({count}, payload) {
    state.count = count - payload
    state.time[1]++
  },
  [types.RESET_COUNT] () {
    state.count = 0
    state.time[2]++
  },
  [types.RESET_COUNTING] () {
    state.isCounting = !state.isCounting
  },
  [types.SWITCH_DELAY] (state, payload) {
    state.isDelay = !payload
  }
}

const execHandler = (commit, fn, flag, time) => {
  (flag ? () => {
    commit(types.RESET_COUNTING)
    setTimeout(() => {
      fn()
      commit(types.RESET_COUNTING)
    }, time * 1000)
  } : fn)()
}

const actions = {
  increase ({state: {isCounting}, commit}, {delay, countSize, delayTime}) {
    if (isCounting) {
      return false
    }

    execHandler(commit, () => {
      commit(types.INCREASE_COUNT, countSize)
    }, delay, delayTime)
  },
  decrease ({state: {isCounting}, commit}, {delay, countSize, delayTime}) {
    if (isCounting || state.count <= 0) {
      return false
    }

    execHandler(commit, () => {
      commit(types.DECREASE_COUNT, countSize)
    }, delay, delayTime)
  },
  reset ({state: {isCounting}, commit}, {delay, delayTime}) {
    if (isCounting || state.count === 0) {
      return false
    }

    execHandler(commit, () => {
      commit(types.RESET_COUNT)
    }, delay, delayTime)
  },
  switchDelay ({state: {isCounting}, commit}, delay) {
    if (isCounting) {   // 可否直接state.isCounting ? 【Q04】
      return false
    }

    commit(types.SWITCH_DELAY, delay)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
