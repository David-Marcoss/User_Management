import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    authData: {
      isAuthenticated: false,
      authToken: undefined,
      userId: undefined,
    },

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

    setAuth(state,{token, userId}){
      state.authData.isAuthenticated = true,
      state.authData.authToken = token
      state.authData.userId = userId

      localStorage.setItem("authData", JSON.stringify(state.authData))
    },

    loadAuth(state, authData){
      state.authData = authData
    },

    clearAuth(state){
      state.authData.isAuthenticated = false,
      state.authData.authToken = undefined
      state.authData.userId = undefined

      localStorage.removeItem("authData")
    }

  },
  actions: {
    async checkAuth({commit}){

      console.log('here')
      
      const apiUrl = process.env.VUE_APP_API_URL
      const authData = JSON.parse(localStorage.getItem("authData"))

      if(authData){
        try{

          await axios.get(apiUrl + "tokenValid",{
            headers: {
              Authorization: authData.authToken
            }})

          commit("loadAuth", authData)

        }catch(err){
          commit("clearAuth")
        }
      }
    }
  
  },


})
