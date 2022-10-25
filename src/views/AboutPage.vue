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
    <footer>
      <br>
      <span>请提出您的宝贵意见:)</span>
      <br>
      <span>474471816@qq.com</span>
    </footer>
</template>

<script setup  lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import Quad from '../effects/quad'

/* eslint-disable */
const props = defineProps({
  show: Boolean
})

const initScene = (): void => {
	console.log('initScene');
  
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

// instantiate a loader
const loader = new OBJLoader();

let hangu: THREE.Group
// load a resource
loader.load(
	// resource URL
	'models/hangu.obj',
	// called when resource is loaded
	function ( object ) {

    hangu = object
		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

const geometry = new THREE.TorusKnotGeometry(0.5)
const material = new THREE.MeshBasicMaterial({
    color: 0x002fa7,
    wireframe: true,
    opacity:0.5,
})

const cube = new THREE.Mesh(geometry, material)
cube.scale.multiply(new THREE.Vector3(0.2,0.2,0.2))
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
    
    if(hangu) { //异步加载！
      hangu.children[0].rotation.y += 0.003
    }
    
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