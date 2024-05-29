<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" id="nav">
  <div class="navbar-brand">
    <router-link  class="navbar-item" to="/" id="">
      <img width="60" height="60" viewBox="0 0 640 160" fill="none" src="img/login.png">
      <p class="has-text-success">AUTH SISTEM</p>
    </router-link>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>

      <router-link to="/user" class="navbar-item">
        Painel do Usuário
      </router-link>

    </div>

    <div class="navbar-end">
      
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/logout" class="button is-light">
            Sair
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {

}
</script>

<style>

#nav {
  height: 10vh;
  font-size: 1.1rem;
}

</style>