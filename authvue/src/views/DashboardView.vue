<template>
  
  <div class="home">
    <h1> Bem vindo ao dashboard </h1>
  </div>

</template>

<script>

export default {
  name: 'DashboardView',
  mounted(){
   
    if(this.$store.state.isAuthenticated == false){
      this.$router.push("/login")
    }
    console.log("wqd")

  }
  
}
</script>
