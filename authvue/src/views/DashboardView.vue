<template>
  <div class="home"> 
    <NavBar/>
    <div class="container is-fluid mt-6" id="dashboard">
      <div class="columns is-centered">
        <div class="column is-full">
          <div class="box">
            <h1 class="title">Sistema de Gerenciamento de usuarios</h1>
            
            <p class="subtitle mt-5">Usuario Logado:</p>
            
            <div class="columns is-multiline">
              <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
                <UserCardVue :user="userLogged" :isUserLogged="true"  id="user-logged"/>
              </div>
            </div>

            <p class="subtitle mt-5">Usuarios cadastrados:</p>

            <div class="columns is-multiline">
              <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen" v-for="user in users" :key="user.id">
                <UserCardVue :user="user" v-if="user.id != userLogged.id"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>


import NavBar from '../components/NavBar.vue'
import UserCardVue from '../components/User/UserCard.vue'
import axios from 'axios'

export default {
  name: 'DashboardView',
  components: {
    NavBar,
    UserCardVue
  },

  data() {
    return {
      users: [],
      userLogged: {},
      showCard: true
    }
  },

  async created(){
    await this.getUsers()
    this.getUserLogged()

  },

  methods: {
    async getUsers() {
      const apiUrl = process.env.VUE_APP_API_URL

      try {
        const response = await axios.get(apiUrl + "users",{
            headers: {
              Authorization: this.$store.state.authData.authToken
            }
          })

        this.users = response.data

      } catch (error) {
        console.log(error)
      }
    },

    getUserLogged() {
      const id = this.$store.state.authData.userId
      this.userLogged = this.users.find(user => user.id === id)
      this.users.splice(this.users.indexOf(this.userLogged), 1)
    }
  }
 
  
}
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
  widows: 100%;
  height: 100%;
}

#dashboard {
  margin-top: 20px;
  height: 80vh;
  width: 90vw;
}

#user-logged{
  background-color: #a9c0ff90
}

@media (max-width: 768px) {
  #dashboard {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #dashboard {
    width: 80vw;
  }
}

@media (min-width: 1025px) {
  #dashboard {
    width: 70vw;
  }
}

</style>
