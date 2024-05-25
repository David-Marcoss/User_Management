<template>
  <div id="app">

      <router-view/>
  </div>

</template>

<script>

export default {
  components:{
    
  },
  
  async mounted(){

    await this.$store.dispatch("checkAuth")

    if(this.$store.state.authData.isAuthenticated){
      this.$router.push("/")
    }else{
      this.$router.push("/login")
    }
   
  }
}
</script>

<style>

#app {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: beige;
}


</style>
