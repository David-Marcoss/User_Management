import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    authToken: null,
    
    notification: {
      show: false,
      msg: null,
      type: null
    },

    user:{
      id: null,
      email: null,
      name: null,
    }

  },
  mutations: {
    setNotification(state,data){
      state.notification = data
    },
    userAuthentication(state,token){
      state.isAuthenticated = true,
      state.authToken = token
    },
    

  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
