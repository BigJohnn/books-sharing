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
      <span>十二月三日 21:57更</span>
      <br>
      <span>474471816@qq.com</span>
    </footer>
    </div>
</template>

<script setup  lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import Quad from '../effects/quad'

/* eslint-disable */
const props = defineProps({
  show: Boolean
})

const initScene = (): void => {
	console.log('initScene');
  
let canvasWidth=256

const scene = new THREE.Scene()
scene.add(new THREE.HemisphereLight());
var directionalLight = new THREE.DirectionalLight(0xffeedd);
directionalLight.position.set(0, 0, 2);
scene.add(directionalLight);

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(canvasWidth,canvasWidth)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

var app = document.getElementById('aboutpage')
if(app?.children?.length && app?.children?.length > 2) {
  var prevlast = app.children[app.children.length-2]
  prevlast.parentNode?.replaceChild(renderer.domElement, prevlast)
}
  
const controls = new TrackballControls(camera, renderer.domElement)

const geometry = new THREE.TorusKnotGeometry(0.5)
// const material = new THREE.MeshBasicMaterial({
//     color: 0x002fa7,
//     wireframe: true,
//     opacity:0.5,
// })

// const texture = new THREE.TextureLoader().load( 'models/texture_out5.png');
// console.log(texture);

// var material:THREE.MeshPhongMaterial
// load a resource
// textureLoader.load(
// 	// resource URL
// 	'models/texture_out2.png',

// 	// onLoad callback
// 	function ( texture ) {
// 		// in this example we create the material when the texture is loaded
// 		material = new THREE.MeshPhongMaterial({
//       // color: 0x002fa7,
//       map:texture,
//       opacity: 0.85,
//       side:THREE.DoubleSide,
//       transparent: true,
//     });
// 	},

// 	// onProgress callback currently not supported
// 	undefined,

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened.' );
// 	}
// );

// const material = new THREE.MeshPhongMaterial({
//   // color: 0x002fa7,
//   map:texture,
//   // opacity: 0.85,
//   // depthTest:true,
//   side:THREE.DoubleSide,
//   // transparent: true,
// })

// instantiate a loader
const loader = new STLLoader();
const objLoader = new OBJLoader();
const plyLoader = new PLYLoader();
const gltfLoader = new GLTFLoader();
// const fbxLoader = new FBXLoader();
// let bottle: THREE.Group
let bottle: THREE.Group
let vessel: THREE.Mesh

let offset = 0.45
// load a resource
// loader.load(
// 	// resource URL
// 	'models/bottle.stl',
// 	// called when resource is loaded
// 	function ( object ) {
//     // object = BufferGeometryUtils.mergeBufferGeometries([object]);
//     // object.computeVertexNormals()
//     console.log('material == ', material);
//     // material.map = texture
//     bottle = new THREE.Mesh(object, material)
//     var scale = 0.1
//     bottle.scale.multiply(new THREE.Vector3(scale,scale,scale))
//     bottle.position.x = offset
// 		// scene.add( bottle );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
console.log(dracoLoader);

gltfLoader.setDRACOLoader( dracoLoader );

gltfLoader.load(
	// resource URL
	'models/bottle_bundle.gltf',
	// called when the resource is loaded
	function ( gltf ) {

    var scale = 0.1
    bottle = gltf.scene
    gltf.scene.scale.multiply(new THREE.Vector3(scale,scale,scale))
    gltf.scene.position.x = offset

    // vat geometry = gltf.scene
    // geometry = BufferGeometryUtils.mergeVertices(geometry, 0.1);
    // geometry.computeVertexNormals(true);

		scene.add( gltf.scene );
    // gltf.scene
		// gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		// gltf.scenes; // Array<THREE.Group>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object
    console.log(gltf.scene);
    // console.log(scene);
    render()
    // renderer.render( scene, camera );

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded gltf!' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
// // load a resource
// fbxLoader.load(
// 	// resource URL
// 	'models/bottle.fbx',
// 	// called when resource is loaded
// 	function ( object ) {
//     // object = BufferGeometryUtils.mergeBufferGeometries([object]);
//     // object.computeVertexNormals()
    
//     // bottle = new THREE.Mesh(object, material)
//     var scale = 0.1
//     // object.children[0].scale.multiply(new THREE.Vector3(scale,scale,scale))
//     // object.children[0].position.x = 0.7
// 		// scene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );


// load a resource
plyLoader.load(
	// resource URL
	'models/yuhuchun.ply',
	// called when resource is loaded
	function ( object ) {
    // object = BufferGeometryUtils.mergeBufferGeometries([object]);
    // object.computeVertexNormals()
    const materialx = new THREE.MeshPhongMaterial({
      color: 0xc2c2cc,
      opacity: 0.5,
      side:THREE.DoubleSide,
      transparent: false,
    })
    vessel = new THREE.Mesh(object, materialx)
    vessel.position.x = -offset
		scene.add( vessel );

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

// const cube = new THREE.Mesh(geometry, material)
// cube.scale.multiply(new THREE.Vector3(0.2,0.2,0.2))
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

    if(vessel){
      vessel.rotation.y+=0.003
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