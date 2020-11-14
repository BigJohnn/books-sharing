import * as THREE from '../../external/three'

// eslint-disable-next-line one-var
var imgWidth = 360 * 2,
  imgHeight = 640 * 2,
  scene,
  camera,
  renderer,
  imgUrl = '/static/images/test.png',
  planeGeometry,
  planeMaterial,
  planeMesh
  // imgSize

export default class Quad {
  constructor (name) {
    this.name = name
    this.complete = false

    planeMaterial = new THREE.ShaderMaterial()

    THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    var loader = new THREE.TextureLoader()
    loader.load(imgUrl, function (texture) {
      this.complete = true

      this.resize(texture.image.width, texture.image.height)

      planeMaterial.uniforms.inputImageTexture = {value: texture}
    }.bind(this))

    this.init()
  }

  init () {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xff0000) // red
    this.scene = scene
    camera = new THREE.OrthographicCamera(-imgWidth / 2, imgWidth / 2, imgHeight / 2, imgHeight / -2, 0.1, 1000)
    this.camera = camera
    camera.position.z = 5
    renderer = new THREE.WebGLRenderer({alpha: true})
    this.renderer = renderer
    renderer.setSize(imgWidth, imgHeight)
    renderer.setViewport(0, 0, imgWidth, imgHeight)
    planeGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
    console.log('planeGeometry', planeGeometry)

    THREE.Cache.enabled = true

    this.loadShaders(planeMaterial)

    THREE.DefaultLoadingManager.onLoad = function () {
      planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
      scene.add(planeMesh)
      console.log('Loading Complete!')
    }

    THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    THREE.DefaultLoadingManager.onError = function (url) {
      console.log('There was an error loading ' + url)
    }

    return true
  }

  resize (width, height) {
    // imgSize = new THREE.Vector2(width, height)
    console.log('imgWidth', imgWidth)

    camera.left = -width / 2
    camera.right = width / 2
    camera.top = height / 2
    camera.bottom = -height / 2

    renderer.setSize(width, height)
    renderer.setViewport(0, 0, width, height)

    // planeMaterial.uniforms.imageSize = {value: imgSize}
  }

  draw () {
    if (!this.complete) return
    renderer.setClearColor(0x00FF00, 0)
    renderer.render(scene, camera)
  }

  loadShaders (material) {
    var loader = new THREE.FileLoader()
    loader.load('/static/shaders/vs.glsl', function (text) {
      material.vertexShader = text
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    })
    loader.load('/static/shaders/fs.glsl', function (text) {
      material.fragmentShader = text
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded1')
    })
  }
  getRenderer () {
    return renderer
  }
}
