<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
   <router-link active-class="active" to="/LongLife" replace>Long Life</router-link>
   <router-link to="/JustKeepBuying" replace>Keep Buying</router-link>
   <br>
   <audio ref='bgm' :src="musicUrl" autoplay preload loop controlsList="nodownload" oncontextmenu="return false"></audio>
   <button v-on:click="onClick">音乐</button>
   <router-view/>
  </div>
</template>

<script>
/* eslint-disable */  
export default {
  name: 'App',
  data() {
    return {
      index:0,
      musicUrl: '/static/music/0.mp3'
    }
  },
  methods: {
    onClick() {
      ++this.index
      this.index %= 8
      this.musicUrl = '/static/music/' + this.index + '.mp3'
      this.$refs.bgm.play()
    }
  }
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
