<template>
  <div class="CanvasX" v-cloak>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

import Quad from '../effects/quad'

export default {

  data () {
    return {
      title: 'Code 4 fun~',
      quad: new Quad()
    }
  },

  mounted () {
    // this.$data.quad = new Quad()
    var quad = this.$data.quad

    console.log(document.getElementById('app'))
    var app = document.getElementById('app')
    var canvas = quad.getRenderer().domElement
    canvas.id = 'canvas'

    if (app.children.length > 1) {
      console.log(app)
      app.removeChild(app.lastChild)
    }
    app.appendChild(canvas)

    animate()

    function animate () {
      requestAnimationFrame(animate)
      quad.draw()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sl{
    margin: 10px 5px 5px 10px;
    float: left;
    background-color: aliceblue;
    width: 430px;
  }
  [v-cloak] {
    display: none;
  }
</style>
