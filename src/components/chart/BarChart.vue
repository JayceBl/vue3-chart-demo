<template>
  <div class="bar-chart" ref="barChartRef"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onBeforeMount, onMounted, ref } from "vue";

const barChartRef = ref(null);
const chartInstance = ref(null);

const initChart = () => {
  chartInstance.value = echarts.init(barChartRef.value);
  window.addEventListener("resize", () => {
    if (chartInstance.value) {
      chartInstance.value.resize();
    }
  });

  chartInstance.value.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: [],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [],
      },
    ],
  });
};

const getChartData = () => {};

const updateChart = () => {
  window.addEventListener("resize", () => {
    if (chartInstance.value) {
      chartInstance.value.resize();
    }
  });

  chartInstance.value.setOption({
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};

onBeforeMount(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose();
  }
});

onMounted(() => {
  initChart();
  updateChart();
});
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

// .bar-chart {
//   width: 400px;
//   height: 300px;
//   overflow: hidden;
// }
</style>
