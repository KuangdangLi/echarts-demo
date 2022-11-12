import echarts from "echarts"
const main = document.getElementById('main')
const button = document.getElementsByTagName('button')[0]
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(main,'light');


let xData = ['10-10', '10-11', '10-12', '10-13', '10-14', '10-15']
let sData = [1, 2, 2, 4, 0, 1]
let x = 15;
let s = 1;

function createX(){
  x+=1
  return `10-${x}`
}
function addS(){
  s+=1
  return s
}
// 指定图表的配置项和数据
// let option = ;

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  title: {
    text: '一些demo'
  },
  tooltip: {
    show: true
  },
  legend: {
    data: ['打胶次数']
  },
  xAxis: {
    data:xData
  },
  yAxis: {},
  series: [
    {
      name: '打胶次数',
      type: 'line',
      data: sData
    }
  ]
});

let isLoading = false

button.addEventListener('click',()=>{
  if(isLoading === true){return}
  myChart.showLoading()
  isLoading = true
  setTimeout(()=>{
    xData.push(createX())
    sData.push(addS())
    console.log(xData);
    console.log(sData);
    myChart.setOption({
      xAxis: {
        data:xData
      },
      series: [
        {
          name: '打胶次数',
          type: 'line',
          data: sData
        }
      ]
    })
    myChart.hideLoading()
    isLoading = false
  },2000)
})

myChart.on('click',(e)=>{
  console.log(e.data);
  console.log(e.dataIndex);
  console.log(e.name);
})