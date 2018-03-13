
function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}

export default {

  namespace: 'user',

  state: {
    isLogin: !!(~~localStorage["isLogin"] || 0),
    isPending: false
  },
  effects: {
    *login (action, {call, put}) {
      yield put({type: 'setup', payload: { isLogin: false, isPending: true }})
      yield call(delay, 1000)
      yield put({type: 'setup', payload: { isLogin: true, isPending: false }})
      localStorage["isLogin"] = 1
    }
  },
  reducers: {
    setup (state, {payload: {isLogin, isPending}}) {
      return { ...state, isLogin, isPending  }
    },
    logout (state) {
      localStorage["isLogin"] = 0
      return {
        ...state,
        isLogin: false
      }
    }
  },

};
