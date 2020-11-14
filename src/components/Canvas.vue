<template>
  <div class="CanvasX" v-cloak>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

import Quad from '../effects/quad'
import * as THREE from '../../external/three'

export default {

  data () {
    return {
      title: 'Code 4 fun~'
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
    console.log('666')
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
<style scoped>
  /*#sl{*/
  /*  margin: 10px 5px 5px 10px;*/
  /*  float: left;*/
  /*  background-color: aliceblue;*/
  /*  width: 430px;*/
  /*}*/
  [v-cloak] {
    display: none;
  }
</style>
