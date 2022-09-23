<template>
    <div class="JustKeepBuying" v-cloak>
      <h1>{{ title }}</h1>
      <h5>{{ author }}</h5>

      <li align="left">Introduction</li>
      <li align="left">I. Saving</li>
      <li align="left">II. Investing</li>
      <li align="left">Conclusion</li>
      <img src="/static/images/jkb.jpeg" width=200/>
    </div>
</template>

<script>
/* eslint-disable */

  export default {
    data () {
      return {
        title: 'Just Keep Buying 笔记',
        author: 'NICK MAGGIULLI (BigJohhn整理)',
      }
    },
    mounted() {
     console.log('JustKeepBuying'); 
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
    [v-cloak] {
      display: none;
    }
</style>
