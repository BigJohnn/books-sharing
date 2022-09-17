<template>
  <div class="CanvasX" v-cloak>
    <h1>{{ title }}</h1>
    <h5>{{ author }}</h5>
    <h2 align="left">{{ outline }}</h2>
    <p align="left">{{whattodo}}</p>
  </div>
</template>

<script>

/* eslint-disable */
import Quad from '../effects/quad'
import * as THREE from '../../external/three'
import { useCssModule } from 'vue'

export default {

  data () {
    return {
      title: 'A Short Guide to a LONG LIFE 《长寿指南》',
      author: 'DAVID B. AGUS, MD',
      outline: '哪些事情应该做？',
      whattodo: '1.看，听，感受身体状况，并记录。Listen, Look, Feel(and Record Your Body\'s Features).'
    
      // quad: undefined
    }
  },

  mounted () {
    var scene = new THREE.Scene()
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
      console.log('Loading Complete!')
    }

    /* */
    console.log(document.getElementById('app'))
    var app = document.getElementById('app')

    var canvas = quad.getRenderer().domElement
    canvas.id = 'canvas'
    
    if (app.children.length > 1) {
      console.log(app)
      app.removeChild(app.lastChild)
    }
    app.appendChild(canvas)

    var imgWidth = 720
    var imgHeight = 1280
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  [v-cloak] {
    display: none;
  }
  p {
    text-indent: 2em;
  }
</style>
