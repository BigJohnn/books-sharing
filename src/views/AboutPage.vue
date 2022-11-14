<template>
    <div
      v-cloak
      class="about"
      id="aboutpage"
    >
    <h1>{{ title }}</h1>
    <h1>与您分享📚</h1>
    
    <br>

    <div class="image_view"></div>

    <footer id="info">
      <br>
      <span>十一月十四日 9:18更</span>
      <br>
      <span>474471816@qq.com</span>
    </footer>
    </div>
</template>

<script setup  lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
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
if(app?.children?.length && app?.children?.length > 2) {
  var prevlast = app.children[app.children.length-2]
  prevlast.parentNode?.replaceChild(renderer.domElement, prevlast)
}
  
const controls = new TrackballControls(camera, renderer.domElement)

const geometry = new THREE.TorusKnotGeometry(0.5)
const material = new THREE.MeshBasicMaterial({
    color: 0x002fa7,
    wireframe: true,
    opacity:0.5,
})

// instantiate a loader
const loader = new STLLoader();

// let bottle: THREE.Group
let bottle: THREE.Mesh

// load a resource
loader.load(
	// resource URL
	'models/bottle.stl',
	// called when resource is loaded
	function ( object ) {

    bottle = new THREE.Mesh(object, material)
    
		scene.add( bottle );

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



const cube = new THREE.Mesh(geometry, material)
cube.scale.multiply(new THREE.Vector3(0.2,0.2,0.2))
// scene.add(cube)

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
    
    if(bottle) { //异步加载！
      // bottle.children[0].rotation.y += 0.003
      bottle.rotation.y += 0.003
    }
    
    // cube.rotation.x += 0.003
    // cube.rotation.y += 0.003

    controls.update()

    renderer.setClearColor(0x15231b, 1.0)
    // renderer.clearColor()
    renderer.clear(true)
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
.image_view{
  margin: auto;
  top: 0;
	left: 0;
	right: 256;
	bottom: 256;
}
</style>