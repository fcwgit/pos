<template>
  <div>
    <select v-model="fruit" multiple>
      <option selected value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="watermelon">西瓜</option>
    </select>
    <span>Selected：{{ fruit | json }}</span>
    <p><button @click="show">xian</button></p>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        fruit:''
      }
    },
    methods:{
      show:function(){
        console.log(this.value.length);
      }
    }
  }
</script>