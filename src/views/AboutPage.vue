<template>
    <div
      v-cloak
      class="about"
      id="aboutpage"
    >
    <h1>{{ title }}</h1>
    <h1>这里与您分享书籍📚，知识与灵感。</h1>
    <h2>不定时更新，</h2>
    <h2>有空常来看看😄</h2>
    <br>
    <div class="image_view"></div>
    </div>
</template>

<script setup  lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import Quad from '../effects/quad'
import { ref, onUnmounted, getCurrentInstance } from 'vue'

/* eslint-disable */
const props = defineProps({
  show: Boolean
})

const initScene = (): void => {
	console.log('Registering Audio PLayer');
  var scene = new THREE.Scene()
  console.log(scene);
  
    scene.background = new THREE.Color(0x000000)

    var quad = new Quad()
    var quad1 = new Quad(undefined, 'fs1.glsl')

    var renderList = [
      quad,
      quad1
    ]

    THREE.Cache.enabled = true

    THREE.DefaultLoadingManager.onLoad = function () {
      for (var i in renderList) {
        if (renderList.hasOwnProperty(i)) {
          var renderer = renderList[i]
          var planeMesh = new THREE.Mesh(renderer.getGeometry(), renderer.getMaterial())
          scene.add(planeMesh)
        }
      }
      // console.log('Loading Complete!')
    }

    
    /* */
    // console.log(document.getElementById('aboutpage'))
    var app = document.getElementById('aboutpage')
    
    var canvas = quad.getRenderer().domElement
    canvas.id = 'canvas'
    console.log('canvas',canvas);

    // document.body.appendChild(canvas)
    if(app?.children?.length && app?.children?.length > 1) {
      if(app?.lastChild) {
        app.removeChild(app?.lastChild)  
      }
    }
    
    // app?.appendChild(canvas) //todo check online not render

    var imgWidth = 512
    var imgHeight = 512
    var camera = new THREE.OrthographicCamera(-imgWidth / 2, imgWidth / 2, imgHeight / 2, imgHeight / -2, 0.1, 1000)
    animate()

    function animate () {
      requestAnimationFrame(animate)
      quad.clear(0xffff00)
      for (var i in renderList) {
        if (renderList.hasOwnProperty(i)) {
          renderList[i].draw(scene, camera)
        }
      }
    }
};

onMounted(() => initScene());

let title = '欢迎光临，'
</script>

<style>
.h1{
  font-style:oblique;
}
</style>