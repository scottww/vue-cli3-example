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
        color: ["#5b9bd5", "#ed7d31"],
        legend: {
          data: ["Pa0", "Pa1"]
        },
        grid: {
          left: "10%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          name: "P(mm)",
          nameLocation: "middle",
          nameGap: 40
        },
        yAxis: {
          //type: category | value
          name: "R(mm)",
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
          // ["0", "1", "2", "1", "4"]
          // Pa0 => 0	66	33	55	22
          // Pa1 => 0	77	44	66	33
          {
            symbolSize: 10,
            //顺序[x, y]
            name: "Pa0",
            data: [
              [0, 0],
              [66, 1],
              [33, 2],
              [55, 1],
              [22, 4]
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          },
          {
            symbolSize: 10,
            //顺序[x, y]
            name: "Pa1",
            data: [
              [0, 0],
              [77, 1],
              [44, 2],
              [66, 1],
              [33, 4]
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
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