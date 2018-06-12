<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <p>
          <span>2017年10月18日上午9:00，中国共产党第十九次全国代表大会在人民大会堂开幕。习近平代表第十八届中央委员会向大会作了题为《决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利》的报告。</span>
        </p>
      </li>
      <li>
        <p>
          <span>这次大会的主题是：不忘初心，牢记使命，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。</span>
        </p>
      </li>
      <li>
        <p>
          <span>党的十九大，是在全面建成小康社会决胜阶段、中国特色社会主义发展关键时期召开的一次十分重要的大会。承担着谋划决胜全面建成小康社会、深入推进社会主义现代化建设的重大任务，事关党和国家事业继往开来，事关中国特色社会主义前途命运，事关最广大人民根本利益。</span>
        </p>
      </li>
      <li>
        <p>
          <span>2017年10月24日，中国共产党第十九次全国代表大会在选举产生新一届中央委员会和中央纪律检查委员会，通过关于十八届中央委员会报告的决议、关于十八届中央纪律检查委员会工作报告的决议、关于《中国共产党章程（修正案）》的决议后，在人民大会堂胜利闭幕。 </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '中国共产党第十九次全国代表大会'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style-type: none;
}
div{
  margin: 50px auto;
  text-align: center;
}  
span{
  text-align: left;
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
  width:80%;
  text-indent:2em;
}  
</style>
