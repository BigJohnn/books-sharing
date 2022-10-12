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
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

// import Quad from '../effects/quad'

/* eslint-disable */
const props = defineProps({
  show: Boolean
})

const initScene = (): void => {
	console.log('initScene');
  // var scene = new THREE.Scene()
  // console.log(scene);
  
  //   scene.background = new THREE.Color(0x000000)

  //   var quad = new Quad()
  //   // var quad1 = new Quad(undefined, 'fs1.glsl')

  //   var renderList = [
  //     quad
  //     // quad1
  //   ]

  //   THREE.Cache.enabled = true

  //   THREE.DefaultLoadingManager.onLoad = function () {
  //     for (var i in renderList) {
  //       if (renderList.hasOwnProperty(i)) {
  //         var renderer = renderList[i]
  //         var planeMesh = new THREE.Mesh(renderer.getGeometry(), renderer.getMaterial())
  //         scene.add(planeMesh)
  //       }
  //     }
  //     // console.log('Loading Complete!')
  //   }

    
  //   /* */
  //   // console.log(document.getElementById('aboutpage'))
  //   var app = document.getElementById('aboutpage')
    
  //   var canvas = quad.getRenderer().domElement
  //   canvas.id = 'canvas'
  //   console.log('canvas',canvas);

  //   // document.body.appendChild(canvas)
  //   if(app?.children?.length && app?.children?.length > 1) {
  //     if(app?.lastChild) {
  //       app.removeChild(app?.lastChild)  
  //     }
  //   }
    
  //   app?.appendChild(canvas) //todo check online not render

  //   var imgWidth = 512
  //   var imgHeight = 512
  //   var camera = new THREE.OrthographicCamera(-imgWidth / 2, imgWidth / 2, imgHeight / 2, imgHeight / -2, 0.1, 1000)
  //   animate()

  //   function animate () {
  //     requestAnimationFrame(animate)
  //     quad.clear(0xffff00)
  //     for (var i in renderList) {
  //       if (renderList.hasOwnProperty(i)) {
  //         renderList[i].draw(scene, camera)
  //       }
  //     }
  //   }
let canvasWidth=256

const scene = new THREE.Scene()

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(canvasWidth,canvasWidth)
  var app = document.getElementById('aboutpage')
  if(app?.children?.length && app?.children?.length > 1) {
    if(app?.lastChild) {
      app.removeChild(app?.lastChild)
    }
  }
  
  app?.appendChild(renderer.domElement) //todo check online not render
// document.body.appendChild(renderer.domElement)

const controls = new TrackballControls(camera, renderer.domElement)

const geometry = new THREE.TorusKnotGeometry(0.5)
const material = new THREE.MeshBasicMaterial({
    color: 0x002fa7,
    wireframe: true,
    opacity:0.5,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    // camera.aspect = window.innerWidth / window.innerHeight
    
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // console.log('w,h', window.innerWidth, window.innerHeight);
    camera.aspect = 1
    camera.updateProjectionMatrix()
    renderer.setSize(canvasWidth,canvasWidth)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.003
    cube.rotation.y += 0.003

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}
animate()

};

onMounted(() => initScene());

let title = '欢迎光临，'
</script>

<style>
.h1{
  font-style:oblique;
}
</style>