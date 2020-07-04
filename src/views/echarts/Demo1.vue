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

      let xMin = 0,
        yMin = 0,
        xMax = 80,
        yMax = 100;

      let markLineOpt = {
        animation: false,
        silent: true,
        symbol: ["none", "arrow"],
        // data: [
        //   {
        //     type: "average"
        //   }
        // ],
        data: [[{ coord: [xMin, yMin] }, { coord: [xMax, yMax] }]],
        lineStyle: {
          show: true,
          color: "#c5c5c5",
          type: "dashed"
        }
      };

      let defaultMaxX = 20,
        defaultGapX = 2,
        defaultMaxY = 100,
        defaultGapY = 10;

      const options = {
        color: ["#5b9bd5", "#ed7d31"],
        legend: {
          data: ["Pa0", "Pa1"]
        },
        // tooltip: {
        // trigger: "axis",
        // axisPointer: {
        //   type: "cross"
        // }
        // },
        grid: {
          top: "15%",
          left: "10%",
          right: "15%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          name: "P(mm)",
          max: Math.ceil(77 / defaultMaxX) * defaultMaxX,
          interval: Math.ceil(77 / defaultMaxX) * defaultGapX,
          splitLine: {
            lineStyle: "none"
          },
          nameLocation: "end",
          nameTextStyle: {
            padding: [70, 0, 0, -45]
          }
        },
        yAxis: {
          //type: category | value
          name: "R(mm)",
          max: Math.ceil(44 / defaultMaxY) * defaultMaxY,
          interval: Math.ceil(44 / defaultMaxY) * defaultGapY,
          axisLabel: {
            formatter: function(v) {
              return v;
            }
          },
          splitLine: {
            lineStyle: "none"
          },
          nameLocation: "end"
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
              [66, 11],
              [33, 22],
              [55, 11],
              [22, 44]
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            markLine: markLineOpt
          },
          {
            symbolSize: 10,
            //顺序[x, y]
            name: "Pa1",
            data: [
              [0, 0],
              [77, 11],
              [44, 22],
              [66, 11],
              [33, 44]
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            markLine: markLineOpt
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