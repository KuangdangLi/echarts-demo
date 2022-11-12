<template>
  <div ref="container"></div>
</template>

<script >
import echarts from 'echarts';
export default {
  props:['option','isLoading'],
  mounted() {
    console.log(this.$refs.container);
    const width = document.documentElement.clientWidth - 20
    this.$refs.container.style.width = width + 'px'
    this.$refs.container.style.height = width*0.5 + 'px'
    this.chart = echarts.init(this.$refs.container)
    this.chart.setOption(this.option)
    console.log(this.option);
  },
  watch:{
    option(){
      // console.log('执行了');
      this.chart.setOption(this.option)
    },
    isLoading(){
      if(this.isLoading){
        this.chart.showLoading()
      }else {
        this.chart.hideLoading()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>