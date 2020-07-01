<template>
  <div class="wrapper">
    <div ref="myChart" :style="{width: '400px', height: '400px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Demo2",
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
          // data: ["Pa0", "Pa1"]
        },
        yAxis: {
          //type: category | value
          type: "category",
          boundaryGap: false,
          data: [0, 3, 6, 9, 12, 15, 18, 3]
        },
        xAxis: {
          type: "value"
        },
        series: [
          {
            data: [0, 11, 22, 33, 44, 55, 11, 33],
            type: "line",
            smooth: true
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