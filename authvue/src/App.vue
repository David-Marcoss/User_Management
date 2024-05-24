<template>
  <div id="app">

      <router-view/>
  </div>

</template>

<script>

export default {
  components:{
    
  },
  mounted(){
    console.log(process.env)
    console.log(process.env.API_URL)

    if(this.$store.state.isAuthenticated == false){
      this.$router.push("/login")
    }else{
      this.$router.push("/")
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
