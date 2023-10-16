<template>
  <div class="gauge-chart" ref="gaugeChartRef"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const gaugeChartRef = ref(null);

onMounted(() => {
  var myChart = echarts.init(gaugeChartRef.value);
  var option;

  option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        detail: {
          formatter: "{value}",
        },
        data: [
          {
            value: 90,
            name: "SCORE",
          },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
.gauge-chart {
  width: 100%;
  height: 100%;
}
</style>
