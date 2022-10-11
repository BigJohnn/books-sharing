<template>
  <div
    v-cloak
    class="LongLife"
  >
    <h1>{{ title }}</h1>
    <h5>{{ author }}</h5>
    <li align="left">
      {{ outline }}
    </li>
    <p
      v-for="(item, i) in todolist"
      :key="item.id"
      align="left"
    >
      {{ i+1+'. '+item }}
    </p>
    <li align="left">
      {{ outline2 }}
    </li>
    <p
      v-for="(item, i) in NOTtodolist"
      :key="item.id"
      align="left"
    >
      {{ i+1+'. '+item }}
    </p>
    <li align="left">
      {{ outline3 }}
    </li>
    <p
      v-for="(item, i) in doctororders"
      :key="item.id"
      align="left"
    >
      {{ i+1+'. '+item }}
    </p>
    <img
      src="/src/assets/images/sglf.png"
      width="256"
    >
  </div>
</template>

<script>

/* eslint-disable */

export default {
  data () {
    return {
      title: 'A Short Guide to a LONG LIFE \"长寿指南\"笔记',
      author: 'DAVID B. AGUS, MD (BigJohhn整理)',
      outline: '哪些事情应该做？',
      outline2: '哪些事情避免做？',
      outline3: '医生整理的一些条目（这部分限于篇幅，不再详细展开）',
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
        'Jack Your Heart Rate Up 50 Percent Above Your Resting Baseline for at Least Fifteen Minutes Every Day. 让心率比休息时高50%，每天至少保持15min。比如参加竞技体育运动，hiit等。',
        'Start a Sensible Caffeine Habit. 咖啡和茶的饮用要适量，下午两点后不宜饮用咖啡☕️，但可以少量饮茶，因为茶🍵里面咖啡因含量相对少些。',
        'Ask Mom or Dad What Killed Grandpa and Aunt Marge. 从亲人那里了解家族成员疾病史，提前采取措施，降低癌症风险。',
        'Consider DNA Testing. DNA测试的意义在于，可以更准确地帮助我们提前防范一些疾病。比如，有的人遗传了心脏病去世的直系亲属的致病基因，那么提前采取措施保护心脏🫀。',
        'Inquire About Statins If You\'re Over the Hill. 如果血脂超标（严重），那么服药。',
        'Take a Baby Aspirin. 整一盒低剂量阿司匹林（75/81mg）,用于缓解头痛和背痛等，是便宜的非处方药💊*',
        'Aside by Screening and Booster Vaccination Recommendations. 接种加强针和成人疫苗，了解相关知识。',
        'Plan a One-, Five-, Ten-, and Twenty- Year Health Strategy. 做长短期健康规划',
        'Deal with Sickness Smartly. 采取科学的措施应对疾病。',
        'Manage Chronic Conditions. 管理慢性病。这个很重要，因为有些慢性病不可逆。',
        'Partner with Your Doc. 如何治疗某种疾病是患者与医生共同决定的，如果不能和大夫谈得融洽，可能需要另外寻找别的大夫。',
        'Strengthen Your Core and Maintain Good Posture. 强化你的核心，维持好的姿态。',
        'Smile. 微笑😊， 微笑只需要牵动17块肌肉， 而皱眉😠需要43块！',
        'Pursue Your Passions. 君子不器。',
        'Positive. 保持乐观。只要愿望足够强烈，就能够实现。',
        'Find Out What Exercise or Activity You\'re Bad at and Focus on It. 补短：刻意练习',
        'Protect Your Eyes and Ears. 保护眼睛和耳朵。',
        'Don\'t Forget Your Teeth and Feet. 不要忘记刷牙🪥和洗脚。一年看1～2次牙医，穿舒适的鞋。注意脚🦶皮肤健康。',
        'Learn CPR. 学习心肺复苏。',
        'Make a Mobile Supply Kit for Emergencies. 制作急救包。',
        'Eat More Than Three Servings of Cold-Water Fish a Week. 每周吃三条以上的冷水鱼🐟。鲑鱼，沙丁鱼，金枪鱼，鳟鱼，鳀鱼，鲱鱼，比目鱼，鳕鱼，黑鳕鱼，鲭鱼和海豚鱼，营养都棒棒。尽量吃野生鱼。',
        'Eat at Least Five Servings of Fruits and Vegetables a Day. 每天吃点蔬菜🥬和水果🍉',
        'Speak Strongly to the Next Generation. 与年轻人多沟通。',
        'Embrace Your OCD side. 拥抱你的强迫症，轻微的强迫症有益健康。',
        'Never Skip Breakfast. 坚持吃早餐。',
        'Seventeen Milligrams Twice a Day. 这句是个反话，实际上，服药的量，应该考虑诸多情况，不应教条主义。*',
        'Take the Positive from Getting a Disease. 把疾病当成某种警钟，并行动起来，改掉坏的生活习惯。',
        'S-T-R-E-T-C-H. 做拉伸，这对关节有好处。',
        'Keep a To-Do List. 制订日程表，做长短期计划。',
        'Ask for Help. 寻求帮助。个人力量有时候是有限的。',
        'Have Children. 有小孩的人比丁克族更大概率活得久。',
        'Comply. 遵医嘱。',
        'Pick Up a Pooch. 养狗🐶。 养狗🐶的人们更加乐观，遛狗的时候必须停下手头其他事情，很轻松。',
        'Have the Toughest Conversation. 结束生命或化疗的决定并不好玩，尽量避免走到这一步。如果需要做决定，可以从prepareforyourcare.org开始。',
        'Understand Basic Biovocabulary. 理解基本的医学词汇。',
        'Make Your Own Definition of Health. 给出你对于健康的定义。',
      ],
      NOTtodolist:[
        'Bad Ingredients and Fad Diets. 不良营养和不良饮食。',
        'Detoxes. 排毒。 身体免疫系统天生会排毒，不要使用药物💊。',
        'Risky Behaviors and Dangerous Sports. 冒险行为和危险运动。⚽️🏀🤼‍♀️🥊等等',
        'Airport Backscatter X-ray Scanners. 机场后向散射X射线扫描仪, 即不要过多暴露在高能射线照射下。',
        'Sunburns。晒伤。',
        'Insomnia. 失眠。万恶之源！',
        'Stilettos and Other Sneaky Sources of Inflammation. 细高跟鞋和其他隐蔽的炎症源。',
        'Juicing. 果汁🍹，当我们把水果🍉的结构破坏后，其分子被空气中的氧气氧化，养分损失。所以吃水果🍉而不是喝果汁🍹。',
        'Eating More Than Three Servings of Red and/or Processed Meats a Week. 每周吃三份以上的红肉或加工肉。',
        'Vitamins and Supplements. 维他命和补品。',
        'Absence of Downtime. 缺乏休息♨️',
        'Smoking. 吸烟害处多多。',
        'Hoarding Your Medical Information. 如果有机会，把个人医疗信息提供给科学研究使用。',
        
      ],
      doctororders:[
        '20s, 20岁需要注意的事项：血压，空腹胆固醇，牙齿🦷，眼睛👀，性健康，免疫，皮肤测试，睾丸测试，胸部测试，锻炼，糖尿病筛查。',      
        '30s, 血压，空腹胆固醇，牙齿🦷，眼睛👀，性健康，免疫，皮肤测试，睾丸测试，胸部测试，锻炼，糖尿病筛查。',      
        '40s, 血压，空腹胆固醇，炎症标志物，牙齿🦷，眼睛👀，性健康，免疫，皮肤测试，睾丸测试，胸部测试，锻炼，糖尿病筛查，前列腺测试，预防药物💊',      
        '50s, 血压，空腹胆固醇，炎症标志物，结直肠检查，牙齿🦷，眼睛👀，骨质疏松症筛查，免疫，皮肤测试，胸部测试，锻炼，糖尿病筛查，前列腺测试，预防药物💊',      
        '60s, 腹部超声，血压，空腹胆固醇，炎症标志物，牙齿🦷，眼睛👀，听觉👂，骨质疏松症筛查，免疫，皮肤测试，胸部测试，锻炼，糖尿病筛查，前列腺测试，预防药物💊',      
        '70s and Beyond, 70岁及以上：腹部超声，血压，空腹胆固醇，炎症标志物，牙齿🦷，眼睛👀，听觉👂，骨质疏松症筛查，免疫，前列腺测试，胸部测试，皮肤测试，锻炼，预防药物💊',      
        'Health List. 健康行为列表',      
        'Top 10 Actions for Reduce Your Risk for Illness. ',      
        'Top 10 Things to Help Educate Kids About Health and Wellness.',      
        'Top 10 Causes of Death in the United States',      
        'Top 10 Causes of Death Worldwide',      
        'Popular Weight Loss Myths. 减肥迷思。',      
        'Top 10 Foods High in Trans Fat.',      
        'Top 10 Most sugary Foods.',      
        'Top High-Glycemic-Index Foods.高血糖指数食物。',      
        'Top 11 Fish with Omega-3. 11种含有Omega-3脂肪酸的鱼类。',      
        'Top 10 Fish with Mercury Contamination. 汞污染',      
        'Top 10 Most Useful Health and Medicine Websites.',      
        'Top 5 Food Poisoning Culprits. 食物🍜中毒罪魁祸首。',      
        'Top 10 Reasons to Go to the ER.去急诊室的十大理由。',      
        'Top 10 Things to Do During Cold Season. 寒冷季节需要做的10件事。',      
        'Top 10 Reasons to Take a Walk. 去散步的十个理由。',      
      ]
    
      // quad: undefined
    }
  },

  mounted () {
    
    console.log('Canvas loaded: ');
    return;
    
  },
  unmounted () {
    console.log('canvas unmounted');
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
