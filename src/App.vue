<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from 'vue'
// import HelloWorld from "./components/HelloWorld.vue";

const bgmElem = ref<HTMLAudioElement>();

var index = 0;
var musicUrl = ref<string>("../assets/music/0.mp3");
function tab() {
  ++index;
  index %= 8;
  // musicUrl = ref<string>("../assets/music/" + index + ".mp3");
  // import music from musicUrl;
  // var m = new Audio("../assets/music/" + index + ".mp3");
  // m.play();
  // const bgm = ref<HTMLAudioElement>();
  // bgm.value?.play();
  // this.$refs.bgm.play();
  // this.$refs.bgm.play();
  // bgmElem.path=musicUrl;
  // bgmElem.value?.srcObject=musicUrl;
  bgmElem.value?.play();
  // bgmElem.value.src="../assets/music/0.mp3";
  console.log(bgmElem.value);
  console.log(musicUrl);
  
  
}

// // Define component's functionality
// const onClickPlayButton = (): void => {
// 	console.log('Clicked play button');
// };
// const setAudioSourceToUserInput = (): void => {
// 	console.log('Setting new source');
// };
// const startPlaying = (): void => {
// 	console.log('Starting to play');
// };
// const stopPlaying = (): void => {
// 	console.log('Stopping to play');
// };
// const onChangeCurrentAudioTime = (ev: Event): void => {
// 	console.log('Changing current audio time');
// };


function onClick() {
  tab();
  console.log('click');
  
}

// const registerAudioPlayer = (): void => {
// 	console.log('Registering Audio PLayer');
//   // tab();
// };
// onMounted(() => registerAudioPlayer());

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
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink active-class="active" to="/LongLife" replace>Long Life</RouterLink>
        <RouterLink to="/JustKeepBuying" replace>Keep Buying</RouterLink>
        <RouterLink to="/OpenCL" replace>OpenCL</RouterLink>
        <audio ref="bgmElem" controls>
          <source :src="musicUrl" type="audio/mp3" preload autoplay/>
        </audio>
        <!-- <audio
          @ended="onFinish"
          ref="bgm"
          
          autoplay
          preload
          controlsList="nodownload"
          oncontextmenu="return false"
        >
        <source type="audio/mpeg" />
        </audio> -->
        <button class="btn_music" @click="onClick">音乐</button>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
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
