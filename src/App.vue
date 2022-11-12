<template>
  <div>
    <div>这里是app</div>
    <VueEcharts :option="option()" :isLoading="isLoading"></VueEcharts>
    <button @click="loadMore">新增标签</button>
  </div>
</template>

<script>

import VueEcharts from './VueEcharts';
export default {
  components: {VueEcharts},
  data() {
    return {
      xData : ['10-10', '10-11', '10-12', '10-13', '10-14', '10-15'],
      sData:[1, 2, 2, 4, 0, 1],
      option:function () {
        return {
          title: {
            text: '一些demo',
          }
        ,
          tooltip: {
            show: true,
          }
        ,
          legend: {
            data: ['打胶次数'],
          }
        ,
          xAxis: {
            data: this.xData,
          }
        ,
          yAxis: {}
        ,
          series: [
            {
              name: '打胶次数',
              type: 'line',
              data: this.sData
            }
          ],
        }
      },
      isLoading: false,
      // a:1,
      // b:2,
      // c:3,
      // arr: [this.a,this.b,this.c]
    }
  },
  // computed:{
  //   option(){
  //     return {
  //       title: {
  //         text: '一些demo',
  //       }
  //       ,
  //       tooltip: {
  //         show: true,
  //       }
  //       ,
  //       legend: {
  //         data: ['打胶次数'],
  //       }
  //       ,
  //       xAxis: {
  //         data: this.xData,
  //       }
  //       ,
  //       yAxis: {}
  //       ,
  //       series: [
  //         {
  //           name: '打胶次数',
  //           type: 'line',
  //           data: this.sData
  //         }
  //       ],
  //     }
  //   }
  // },
  created() {
    // console.log(this.a);
    // console.log(this.b);
    // console.log(this.c);
    // console.log(this.arr);
  },
  methods: {
    loadMore() {
      console.log('执行了');
      console.log(this.isLoading);
      this.isLoading = true
      // console.log(this.xData[this.xData.length - 1].split('-')[1]);
      setTimeout(()=>{
        this.xData = [...this.xData,'10-' + (Number(this.xData[this.xData.length - 1].split('-')[1]) + 1).toString()]
        this.sData = [...this.sData,this.sData[this.sData.length -1] + 1]
        console.log(this.xData);
        console.log(this.sData);
        this.isLoading = false
      },2000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>