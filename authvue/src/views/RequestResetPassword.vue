<template>
    <div class="login-form-container">
      <div class="card" style="width: 500px; height:550px">
          <div class="card-image form-img">
              <figure class="image is-128x128">
              <img
                  src="/img/login.png"
                  alt="Placeholder image"
              />
              </figure>
              <div class="is-size-2 has-text-centered has-text-success">
                      AUTH SISTEM
              </div>
          </div>
          <div class="card-content">
              
              <p class="is-size-3 has-text-centered"> Vamos recuperar sua senha </p>

              <p class="is-size-6">Informe o E-mail que você usa para entrar na sua conta.</p>
              
              <NotificationVue />
              
              <div class="content">
                  <form @submit.prevent="requestResetPassword">
                      <div class="field">
                          <label for="E-mail"> E-mail</label>
                          <p class="control has-icons-left has-icons-right">
                              <input class="input" type="email" placeholder="Email" v-model="email">
                              <span class="icon is-small is-left">
                                  <span class=" material-symbols-outlined">alternate_email</span>
                              </span>
                          </p>
                      </div>
                      
                      <div class="field">
                          <p class="control">
                              <button class="button is-fullwidth is-primary is-inverted is-rounded">Entrar</button>
                          </p>
                      </div>
                  </form><br>
              </div>
          </div>
      </div>
    </div>
  </template>
  
<script>
import NotificationVue from '../components/Notification.vue'
import axios from 'axios'

export default {
    name: "LoginVue",
    components:{
        NotificationVue
    },
    data(){
        return{
            showForm: "",
            email: "",
            password: ""
        }
    },

    methods:{
        async requestResetPassword(){

            if( this.email){

                try{
                    const req = await axios.post("http://localhost:3000/users/request-reset-password", {
                        email: this.email,
                    })

                    console.log(req)
                    

                }catch (error ){
                    const info = error.response != undefined ? error.response.data.error : "Erro no servidor !!"
                        
                    this.$store.commit("setNotification",{
                        show: true,
                        msg: "Não foi possivel realizar login \n "+ info,
                        type: "danger"
                    })
            }
            
            }else{
                this.$store.commit("setNotification",{
                        show: true,
                        msg: "Por favor preencha seu E-mail !! \n ",
                        type: "danger"
                })
            }
        }
    }
}
</script>

  <style>
  
  .login-form-container{
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .form-img{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  
  
  </style>