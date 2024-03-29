import * as THREE from 'three'

// eslint-disable-next-line one-var
var imgWidth = 128,
  imgHeight = 128,
  // imgUrl = '/images/sglf.png',
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

    // THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
    //   console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    // }

    // var loader = new THREE.TextureLoader()
    // loader.load(imgUrl, function (texture) {
    //   this.complete = true

    //   let widthMax = 256
    //   this.resize(widthMax, Math.floor(texture.image.height * widthMax / texture.image.width))

    //   let w = 128
    //   this.resize(w,w)
    //   planeMaterial.uniforms.inputImageTexture = {value: texture}
    // }.bind(this))

    this.renderer = new THREE.WebGLRenderer({alpha: true})
    var renderer = this.renderer
    renderer.setSize(imgWidth, imgHeight)
    renderer.setViewport(0, 0, imgWidth, imgHeight)
    planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
    // console.log('planeGeometry', planeGeometry)

    vsPath = vsPath === undefined ? 'vs.glsl' : vsPath
    fsPath = fsPath === undefined ? 'fs.glsl' : fsPath

    vsPath = '/shaders/' + vsPath
    fsPath = '/shaders/' + fsPath
    this.loadShaders(planeMaterial, vsPath, fsPath)

    THREE.Cache.enabled = true

    // THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    //   console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    // }

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
    // if (!this.complete) return //todo:
    this.renderer.render(scene, camera)
  }

  loadShaders (material, vsPath, fsPath) {
    var loader = new THREE.FileLoader()
    loader.load(vsPath, function (text) {
      // console.log('vs text', text);
      material.vertexShader = text
    },
    function (xhr) {
      // console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    }),
    loader.load(fsPath, function (text) {
      material.fragmentShader = text
    },
    function (xhr) {
      // console.log((xhr.loaded / xhr.total * 100) + '% loaded1')
    })
  }
  getRenderer () {
    return this.renderer
  }
}
