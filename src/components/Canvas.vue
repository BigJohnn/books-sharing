<template>
  <div class="CanvasX" v-cloak>
    <h1>{{ title }}</h1>
    <h5>{{ author }}</h5>
    <li align="left">{{ outline }}</li>
    <p align="left" v-for="(item, i) in todolist" :key="i">{{i+1+'. '+item}}</p>
  </div>
</template>

<script>

/* eslint-disable */
import Quad from '../effects/quad'
import * as THREE from '../../external/three'

export default {

  data () {
    return {
      title: 'A Short Guide to a LONG LIFE 读\"长寿指南\"笔记',
      author: 'DAVID B. AGUS, MD (BigJohhn整理)',
      outline: '哪些事情应该做？',
      todolist: [
        'Listen, Look, Feel(and Record Your Body\'s Features).看，听，感受身体状况，并记录。',
        'Measure Yourself. 体重，步数，血压之类的指标，每个人不太一样。定期体检。',
        'Automate Your Life. 人类的身体喜欢可预测的行为，规律作息合理饮食很重要。',
        'Mobilize Your Medical Data. 将自己的医疗信息用手机记录下来， 随时（也方便别人）查看。',
        'Eat Real Food ( and Don\'t Let the Apple Fall Far from the Tree). 吃真正的食物，不要吃含有添加剂的零食之类小吃。',
        'Know Your Grocer. 认识你的杂货店老板，从他们那里知道你吃的食物来自哪里，生产过程如何等。本地的当季食物，大概率比较新鲜。',
        'Grow a Garden. 养一些花花草草。',
        'Maintain a Dietary Protocol That Works for You.制订个人食谱。吃得干净虽然是美德，但不一定对身体好（不想吃的时候不要继续吃了）。自己做饭，并分享给他人。',
        'Cultivate Om in the Office. 工作时间学会减压。比如饭后出去走走；晒太阳；番茄🍅工作法；提前做计划之类的。',
        'Have a Glass of Wine with Dinner. 晚饭时间喝杯酒。 红酒有益健康。 但就一杯。',
        'Practice Good Hygiene -- in Bed and Out. 注意个人卫生。尤其是睡前与出门前。每周洗一次床单。很多小毛病与脏乱的居住环境有关。',
        'Cohabitate. 同居。与另一半住一起，有助于良好的生活习惯。',
        'Maintain a Healthy Weight. 保持健康的体重, 即BMI 18.5~24.9',
        'Get Your Annual Flue Shot, Even If You \"Never Get Sick\" and \"Have Never Gotten the Flu\" 每年接种流感疫苗。',
        'Get Naked. 观察全身的健康状况，矫正体态，减脂，护肤，让身体的健康看得见。',
        'Get Off Your Butt More. 避免久坐。',
        '54/190， 未完待续......',
      ]
    
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
