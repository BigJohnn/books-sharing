<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
   <router-link active-class="active" to="/LongLife" replace>Long Life</router-link>
   <router-link to="/JustKeepBuying" replace>Keep Buying</router-link>
   <router-view/>
  </div>
</template>

<script>
/* eslint-disable */  
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #25527e;
  margin-top: 60px;
}
</style>
