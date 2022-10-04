<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from 'vue'
import Bubble from './components/BubbleComp.vue'
const bgmElem = ref<HTMLAudioElement>();

var index = 0;
const showModal = ref(false)
const musicUrl = ref("/music/0.mp3");

function tab() {
  ++index;
  index %= 8;
  musicUrl.value = "/music/" + index + ".mp3";
  
  bgmElem.value?.load();
  bgmElem.value?.play();
    
}

function onClick() {
  tab();
  console.log('click');
  
}

function onEnded() {
  tab();
  console.log('ended');
  
}

const registerAudioPlayer = (): void => {
	console.log('Registering Audio PLayer');
  // tab();
};
onMounted(() => registerAudioPlayer());

</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/icon.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink active-class="active" to="/LongLife" replace>Long Life</RouterLink>
        <RouterLink to="/JustKeepBuying" replace>Keep Buying</RouterLink>
        <RouterLink to="/OpenCL" replace>OpenCL</RouterLink>
        <audio id="bgmElem" :src="musicUrl" type="audio/mpeg" oncontextmenu="return false" autoplay @ended="onEnded"/>
        <button class="btn_music" @click="onClick">音乐</button>

        <button @click="showModal = true">Open Modal</button>
        
      </nav>
    </div>
  </header>

  <RouterView />

  <Teleport to="body">
    <bubble :show="showModal" @close="showModal = false">
    <template #header>
      <h3>custom header</h3>
    </template>
    </bubble>
  </Teleport>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.btn_music{
  color: #fff;
  background: linear-gradient(315deg, #e8d015 25%, #8208c4);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
