<template>
  <div
    v-cloak
    class="JustKeepBuying"
  >
    <h1>{{ title }}</h1>
    <h5>{{ author }}</h5>

    <li align="left">
      Introduction
    </li>
    <p
      v-for="(item) in intro"
      :key="item.id"
      align="left"
    >
      {{ item }}
    </p>
    <p
      v-for="(item, i) in part1"
      :key="item.id"
      align="left"
      @click="pick_part1(i)"
    >
      {{ i+1+'. '+item }}
    </p>
    <li align="left">
      I. Saving
    </li>
    <p
      v-for="(item,i) in saving"
      :key="item.id"
      align="left"
      @click="pick_part2(i)"
    >
      {{ i+2+'. '+item }}
    </p>
    <li align="left">
      II. Investing
    </li>
    <p
      v-for="(item,i) in investing"
      :key="item.id"
      align="left"
      @click="pick_part3(i)"
    >
      {{ i+10+'. '+item }}
    </p>
    <li align="left">
      Conclusion
    </li>
    <p
      v-for="(item) in part4"
      :key="item.id"
      align="left"
      @click="pick_part4"
    >
      {{ item }}
    </p>
    <img
      src="../assets/images/jkb.jpeg"
      width="256/"
    >
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
          "Where Should You Start 如果没有可投资的金融资产，那么应该专注于存钱💰。",
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
          "What Should You Invest In? # 致富的道路千万条，如何找到适合自己的一条？ 答案是不断去尝试，尝试各种路子。a.股票.可以通过购买个股，指数基金，ETF等方式来购买。优点是高回报，缺点是价格波动剧烈，基于市场情绪而非价值本身。\
          b.债券.债券应该做为多元化资产而非风险资产。当股票或其他高风险资产下跌📉的时候，债券上涨📈；债券相对其他资产而言，有着更连续的收益流; 债券还提供流动性以重新平衡您的投资组合或其他负债。购买债券指数基金或者ETF会比购买个人债券更方便。\
          c.投资房地产。思路是赚取租金。房子🏠后续还可以卖掉。高回报，尤其是举债经营的时候；但是管理房产和租户令人头疼。d.如果想走c,但不想自己管理房产，可以考虑房产投资信托（REITs）。好处是拥有不需要自己管理的房屋🏠产权，且经济向好的时期，\
          与股市相关度较小；坏处是波动较股市强烈或持平，非上市的REITs资产流动性差，且市场崩盘的时候，与股市及其他高风险资产相关度高。e.农场。好处是与股票和其他金融资产相关度低，抗通胀以及低的下行潜力；坏处是流动性低，费用高，需要\"合格投资者\"\
          身份去参与众包解决方案。f.小型企业/特许经营权/天使投资。有两个选项，担任企业所有权人&&执行官或仅担任企业所有权人。前者比如创业，往往需要付出比想象中多的努力；后者可以是天使投资人。高回报，但周期长，需要经历多次失败。g.著作特许权使用费。\
          比如出个专辑💽之类的。h.自己的产品。比如写书📖，信息指南🧭，在线课程等。好处是完全的所有权，个人满足，可以创造有价值的品牌；坏处是劳动密集，且没有可靠的回报。（目前的文字属于h. :D) i.黄金，数字加密货币，艺术品等。致富道路多多，\
          任君选择，发挥自身优势就好。",
          "Why You Shouldn\'t Buy Individual Stocks? 为何不该买个股？",
          "How Soon Should You Invest? 投资频率如何控制？",
          "Why You Shouldn\'t wait to buy the dip? 为何不该逢低买入？",
          "Why Investing Depends on Luck? 为什么投资依靠运气？",
          "Why You Shouldn\' fear volatility? 为什么你不该害怕不稳定性。",
          "How to But During a Crisis. 如何在经济危机中买入。为何市场崩溃是买入时机。重塑优势。市场恢复缓慢怎破？",
          "When Should You Sell. 你应当何时卖出。",
          "Where Should You Invest? A Roth IRA or 401(k) makes the most sense if you're confident of having a higher income in retirement than you do now. \
          401(k) 计划是许多美国雇主提供的退休储蓄计划，可为储蓄者提供税收优惠。它以美国国内税收法 (IRC)的一部分命名。\
          注册 401(k) 的员工同意将每笔薪水的一定百分比直接支付到投资账户中。雇主可以匹配部分或全部的贡献。员工可以在多种投资选择中进行选择，通常是共同基金。\
          有两种主要选择，每种都有不同的税收优势。在传统的 401(k) 中，员工的缴款从总收入中扣除，这意味着这笔钱来自扣除所得税之前的员工工资单。因此，雇员的应税收入会减去当年的缴款总额，并可作为该纳税年度的减税申报。在员工提取资金（通常是在退休时）之前，无需对捐款或投资收益征税。\
          对于Roth 401(k)，供款从员工的税后收入中扣除，这意味着供款来自扣除所得税后的员工工资。因此，供款当年没有减税。在退休期间提取资金时，无需对员工的供款或投资收益缴纳额外税款。\
          然而，并非所有雇主都提供罗斯账户的选项。如果提供罗斯，员工可以选择一个或另一个或两者兼而有之，最多可达到其免税供款的年度限额。",
          "Why You Will Never Feel Rich? 为何你总感觉不到自己富有？",
          "The Most Important Asset. 最重要的资产（身体是革命本钱）",
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
