<template>
  <div class="wrapper">
    <div ref="myChart" :style="{width: '400px', height: '400px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.myChart = this.$echarts.init(this.$refs.myChart);
      this.myChart.clear();

      const options = {
        color: ["#ed7d31"], //#ed7d31
        legend: {},
        tooltip: {
          trigger: "axis",
          formatter: function(arr) {
            //arr[0].value[0]
            let v = arr[0].value;
            return `时段(△t): ${v[1]}<br/>流量(Q): ${v[0]}`;
          }
        },
        grid: {
          left: "10%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          name: "时段(△t)",
          nameLocation: "middle",
          nameGap: 40
        },
        yAxis: {
          //type: category | value
          name: "流量(Q)",
          nameLocation: "middle",
          nameRotate: 90,
          nameGap: 40,
          axisLabel: {
            formatter: function(v) {
              return v;
            }
          }
        },
        series: [
          {
            symbolSize: 10,
            //顺序[x, y]
            data: [
              [0, 0],
              [11, 3],
              [22, 6],
              [33, 9],
              [44, 12],
              [55, 15],
              [11, 18],
              [33, 3]
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 8,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        ]
      };

      this.myChart.setOption(options);
    }
  },
  watch: {}
};
</script>
<style scoped>
.wrapper {
}
</style>