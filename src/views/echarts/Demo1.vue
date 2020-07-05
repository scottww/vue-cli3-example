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
        xMax = 25, //22~25
        yMax = 66; //66~70

      let markLineOpt = {
        animation: false,
        silent: true,
        symbol: ["none", "arrow"],

        data: [
          [
            {
              // type: "min"
              coord: [xMin, yMin]
            },
            {
              // type: "max",
              coord: [xMax, yMax]
            }
          ]
        ],
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

      let xAxisMax = Math.ceil(22 / defaultMaxX) * defaultMaxX,
        xAxisInterval = Math.ceil(22 / defaultMaxX) * defaultGapX;

      const options = {
        color: ["#5b9bd5", "#ed7d31"],
        legend: {
          data: ["Pa0", "Pa1"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          top: "15%",
          left: "10%",
          right: "15%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          name: "R(mm)",
          max: xAxisMax,
          interval: xAxisInterval,
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
          name: "P(mm)",
          max: Math.ceil(66 / defaultMaxY) * defaultMaxY,
          interval: Math.ceil(66 / defaultMaxY) * defaultGapY,
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
              [2, 11],
              [6, 22],
              [10, 33],
              [14, 44],
              [18, 22],
              [22, 66]
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
              [4, 11],
              [8, 22],
              [12, 33],
              [16, 44],
              [20, 22],
              [24, 66]
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