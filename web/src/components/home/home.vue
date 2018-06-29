<template>
  <div class="home">
    <div id="main" ref="main"></div>
    <Footer :active="0"/>
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'

export default {
  data () {
    return {
      size: {
        width: '100%',
        height: '100%'
      },
      option: { // 绘制图表
        backgroundColor: '#2c343c',
        title: {
          text: '消费记录饼状图',
          subtext: '本月',
          x: 'center',
          y: '10%',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  methods: {},
  mounted () {
    let echarts = require('echarts')
    let myChart = document.getElementById('main')
    var myChartContainer = function () {
      myChart.style.width = window.innerWidth + 'px'
      myChart.style.height = window.innerHeight + 'px'
    }
    myChartContainer()
    myChart = echarts.init(myChart)
    myChart.setOption(this.option)
    window.onresize = myChart.resize
  },
  components: {
    Footer
  }
}
</script>

<style lang="stylus" scoped>
  .home
    position relative
    #main
      margin auto 0
</style>
