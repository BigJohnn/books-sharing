import * as THREE from '../../external/three'

// eslint-disable-next-line one-var
var imgWidth = 360 * 2,
  imgHeight = 640 * 2,
  imgUrl = '/static/images/test.png',
  planeGeometry
  // imgSize

export default class Quad {
  constructor (vsPath, fsPath) {
    this.complete = false

    this.planeMaterial = new THREE.ShaderMaterial()
    var planeMaterial = this.planeMaterial
    planeMaterial.blending = THREE.CustomBlending
    planeMaterial.blendEquation = THREE.AddEquation // default
    planeMaterial.blendSrc = THREE.SrcAlphaFactor // default
    planeMaterial.blendDst = THREE.OneMinusSrcAlphaFactor // default

    THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    var loader = new THREE.TextureLoader()
    loader.load(imgUrl, function (texture) {
      this.complete = true
      this.resize(texture.image.width, texture.image.height)
      planeMaterial.uniforms.inputImageTexture = {value: texture}
    }.bind(this))

    this.renderer = new THREE.WebGLRenderer({alpha: true})
    var renderer = this.renderer
    renderer.setSize(imgWidth, imgHeight)
    renderer.setViewport(0, 0, imgWidth, imgHeight)
    planeGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
    console.log('planeGeometry', planeGeometry)

    vsPath = vsPath === undefined ? 'vs.glsl' : vsPath
    fsPath = fsPath === undefined ? 'fs.glsl' : fsPath

    vsPath = '/static/shaders/' + vsPath
    fsPath = '/static/shaders/' + fsPath
    this.loadShaders(planeMaterial, vsPath, fsPath)

    THREE.Cache.enabled = true

    THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    THREE.DefaultLoadingManager.onError = function (url) {
      console.log('There was an error loading ' + url)
    }
  }

  getGeometry () {
    return planeGeometry
  }
  getMaterial () {
    return this.planeMaterial
  }

  resize (width, height) {
    // imgSize = new THREE.Vector2(width, height)
    this.renderer.setSize(width, height)
    this.renderer.setViewport(0, 0, width, height)

    // planeMaterial.uniforms.imageSize = {value: imgSize}
  }

  clear (color) {
    this.renderer.setClearColor(color, 0)
  }
  draw (scene, camera) {
    if (!this.complete) return
    this.renderer.render(scene, camera)
  }

  loadShaders (material, vsPath, fsPath) {
    var loader = new THREE.FileLoader()
    loader.load(vsPath, function (text) {
      material.vertexShader = text
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    })
    loader.load(fsPath, function (text) {
      material.fragmentShader = text
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded1')
    })
  }
  getRenderer () {
    return this.renderer
  }
}
