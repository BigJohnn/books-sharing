<template>
    <div class="JustKeepBuying" v-cloak>
      <h1>{{ title }}</h1>
      <h5>{{ author }}</h5>

      <li align="left">Introduction</li>
      <p align="left" v-for="(item) in intro" :key="item.id">{{item}}</p>
      <p align="left" v-for="(item, i) in part1" :key="item.id" @click="pick_part1(i)">{{i+1+'. '+item}}</p>
      <li align="left">I. Saving</li>
      <p align="left"  v-for="(item,i) in saving" :key="item.id" @click="pick_part2(i)">{{i+2+'. '+item}}</p>
      <li align="left">II. Investing</li>
      <p align="left"  v-for="(item,i) in investing" :key="item.id" @click="pick_part3(i)">{{i+10+'. '+item}}</p>
      <li align="left">Conclusion</li>
      <p align="left" v-for="(item) in part4" :key="item.id" @click="pick_part4">{{item}}</p>
      <img src="/static/images/jkb.jpeg" width=200/>
    </div>
</template>

<script>
/* eslint-disable */

  export default {
    data () {
      return {
        title: 'Just Keep Buying 笔记',
        author: 'NICK MAGGIULLI (BigJohhn整理)',
        intro: [
          "改变人生的咒语：Keep Buying 继续购买。",
          "持续购买，指的是购买多种多样能带来收入的金融资产。这种收入包括直接或潜在收入。",
          "什么时候买，如何买，买什么————并不重要，重要的是一直买买买。",
          "记住\"KeepBuying\"只是个开始, 本书中作者MAGGIULLI先生将回答以下问题:",
          "为什么实际需要省的钱💰，比想象中少。",
          "为什么信用卡💳负债不总是坏东西。",
          "为什么存钱逢低买入不是好习惯。",
          "为什么不应该买个股",
          "为什么大的市场调整总是好的买入时机。",
        ],
        part1: [
          "Where Should You Start 如果没有可投资的金融资产，那么应该专注于省钱💰。",
        ],
        part1msg: [
          "Why saving is for the poor and investing is for the rich? 为什么穷人需要省钱而富人需要投资理财",
        ],
        saving: [
          "How Much Should You Save 应该存多少钱💰？ 存你所能存的。 储蓄额=收入-支出，收入很容易知道，但是支出不容易计算。使用单一的支付方式，如只用同一张信用卡💳，是个好方法。经验主义的研究表明，现在或未来退休人员花光钱的概率较低，因此作者认为实际需要的储蓄额可能比想象中要低。",
          "How to Save More. 如何存下更多：发挥个人专长，专注于提高收入。具体方式有，出卖自己的时间/专业知识，售卖技巧&服务，教学，售卖产品，做管理层。如果存得再多一点：像老板一样思考。",
          "How to Spend Money Guilt-Free? 如何无负担地存钱？2x Rule: 每买一件东西，也同时购买等价的金融资产。这样即使存在乱花钱行为，也会减轻心理负担。第二个方式是最大化满足感：💰需要花在令自己满意的地方，并因人而异。",
          "How Much Lifestyle Creep is Okay? 有多少生活品质可以提升？ 当前存10%，如果涨薪了，那么需要把涨📈出部分的更多比例存起来，如36%",
          "Should You Ever Go Into Debt? 什么时候需要借贷？ a.为降低风险；b.借贷的代价比获取回报的代价小。",
          "Should You Rent or Should You Buy? 租房还是买房？买是肯定要买的，不过要看时机。",
          "How to Save for a Down Payment (and Other Big Purchases) 如何存首付（以及其他大笔开销）",
          "When Can You Retire? 你什么时候能退休？为何退休后开销减少。交点法则：月投资收入超出月开销的时候，就可以退休了。",
        ],
        saveing_message : [
          "It\'s probably less than you think. 你需要存起来的钱💰，也许比你想象中要少。",
          "The biggest lie in personal finance. 个人财务最大的谎言: 节省开支就能变得富有。",
          "The 2x Rule and maximizing fulfillment. ",
          "And why it\'s more than you think. 为什么可能多到超乎你的想象。",
          "Why credit card debt isn\'t always bad. 为什么💳不总是坏东西",
          "How to think about your biggest financial purchase.",
          "Why your time horizon is so important. 为何你的投资期如此重要。",
          "And why money isn\'t the most important factor. 为什么💰不是最重要的因素。",
        ],
        investing: [
          "Why Should You Invest? a.为未来的自己存钱；b.为抵抗通胀；c.为把个人资本转为金融资本。个人资本包括知识技能和时间，知识技能可以不断增长，但时间一去不返。金融资本可以在未来为你换取更多自由时间⌚️。",
          "What Should You Invest In? # todo: 本章详细介绍了各种金融资产的特点，值得细品",
          "Why You Shouldn\'t Buy Individual Stocks?",
          "How Soon Should You Invest? ",
          "Why You Shouldn\'t wait to buy the dip?",
          "Why Investing Depends on Luck?",
          "Why You Shouldn\' fear volatility? 为什么你不该害怕不稳定性。",
          "How to But During a Crisis. 如何在经济危机中买入。为何市场崩溃是买入时机。重塑优势。市场恢复缓慢怎破？",
          "When Should You Sell. 你应当何时卖出。",
          "Where Should You Invest? A Roth IRA or 401(k) makes the most sense if you're confident of having a higher income in retirement than you do now. #todo 这章比较硬核，后续补充。",
          "Why You Will Never Feel Rich? 为何你总感觉不到自己富有？",
          "The Most Important Asset. ",
        ],
        investing_message:[
          "Three reasons why growing your money is more important than ever before.增长财富如今变得如此重要的三个原因。",
          "There is no one true path to wealth.",
          "Why Underperforming is the least of your worries? 表现不佳是你最后需要担心的。",
          "And why earlier is better than later.",
          "Even God couldn\'t beat dollar-cost averaging. 上帝也无法打败平均成本法。",
          "And thy you shouldn\'t care.",
          "The price of admission for successful investing. 成功投资的入场价。",
          "Why should you stay calm in a panic. 为何你应该临危不乱",
          "On rebalancing, concentrated positions, and the purpose of investing. 关于再平衡、集中头寸和投资目的*",
          "On taxes, Roth vs. traditional, and why you probably shouldn\'t max out your 401(k)",
          "And why you probably already are.",
          "And why you\'ll never get any more of if",
        ],
        part4: [
          "Just Keep Buying Rules.",
        ],
        part4msg: [
          "How to win the time traveler\'s game.",
        ],
      }
    },
    methods: {
      pick_part2: function(index) {
        alert(this.saveing_message[index])
        // console.log();
      },
      pick_part1: function(index) {
        alert(this.part1msg[index])
        // console.log();
      },
      pick_part3: function(index) {
        alert(this.investing_message[index])
        // console.log();
      },
      pick_part4: function() {
        alert(this.part4msg[0])
        // console.log();
      },
    },
    mounted() {
     console.log('JustKeepBuying'); 
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
