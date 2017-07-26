const types = {
  'SHOW_TOP_BAR': 'SHOW_TOP_BAR',
  'HIDE_TOP_BAR': 'HIDE_TOP_BAR',
  'SHOW_FOOT_BAR': 'SHOW_FOOT_BAR',
  'HIDE_FOOT_BAR': 'HIDE_FOOT_BAR'
}

const state = {
  showTop: true,
  showFoot: true
}

const mutations = {
  [types.SHOW_FOOT_BAR] ({showTop}) {
    state.showTop = true
  },
  [types.HIDE_TOP_BAR] ({showTop}) {
    state.showTop = false
  },
  [types.SHOW_FOOT_BAR] ({showFoot}) {
    state.showFoot = true
  },
  [types.HIDE_FOOT_BAR] ({showFoot}) {
    state.showFoot = false
  }
}

const actions = {
  showTop ({commit}) {
    commit(types.SHOW_TOP_BAR)
  },
  hideTop ({commit}) {
    commit(types.HIDE_TOP_BAR)
  },
  showFoot ({commit}) {
    commit(types.SHOW_FOOT_BAR)
  },
  hideFoot ({commit}) {
    commit(types.HIDE_FOOT_BAR)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
