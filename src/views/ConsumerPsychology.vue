<template>
  <div
    v-cloak
    class="ConsumerPsychology"
  >
    <h2>{{title_en}}</h2>
    <h1>{{ title }}</h1>
    <h2>{{ title2 }}</h2>
    <h5>{{ author }} {{author_cn}}</h5>
    <h6>{{ author_x }}</h6>
    <br>
    <h3 align="left">
      读完本书，你将了解
    </h3>
    <li 
      v-for="(item) in outlines"
      :key="item"
      align="left">
      {{ item }}
    </li>
    
    <img
      src="/images/cp.jpeg"
      width="256"
    >

    <Teleport to="body">
    <bubble :show="showBubble" @close="showBubble = false">
    <template #header>
      <h3>{{bubbleText}}</h3>
    </template>
    </bubble>
  </Teleport>
  </div>
</template>

<script setup lang="ts">
  var showBubble = false
  var bubbleText = 'hi'
  var title = "我们为什么买买买"
  var title2 = "消费行为背后的心理学奥秘"
  var title_en = "Consumer Psychology"
  var author = "Cathrine V.Jansson-Boyd"
  var author_cn = "郑淑明译"
  var author_x = "BigJohhn整理"

  var outlines = [
    "人们只会关注所接触的某些刺激，并对其进行选择性的处理，同时忽略掉其他元素；",
    "人们更容易记住广告开头和结尾处呈现的信息；",
    "比起营销者提供的信息，人们在消费过程中的体验更重要；",
    "人们常会根据物质财富来评价他人，这意味着消费已成为塑造和维持身份的重要元素；",
    "情绪会影响人们的认知和动机过程，进而影响他们对所遇到事物的评价；",
    "人们很有可能通过\"封面\"来判断\"一本书\"的好坏；",
    "人类有五大基本需求，营销的宗旨是发现并满足这些需求；",
    "集体主义文化下的个体通常喜欢顺应自己所属的群体，并因此更倾向于对品牌忠诚；",
    "网店的页面布局可能是预测购买行为的决定性因素；",
    "尽管消费行为和幸福感之间关系很复杂，但买买买确实会让我们获得即时的快乐。",
  ]

</script>

<style type="text/css" scoped>
[v-cloak] {
  display: none;
}
p {
  text-indent: 2em;
}
</style>