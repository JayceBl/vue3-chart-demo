<template>
  <div class="multi-bar-chart" ref="multiBarRef"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const multiBarRef = ref(null);

const initChart = () => {
  var myChart = echarts.init(multiBarRef.value);
  var option;

  option = {
    title: {
      text: "World Population",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "2023-11-11",
        "2023-11-12",
        "2023-11-13",
        "2023-11-14",
        "2023-11-15",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "墨量",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744],
      },
      {
        name: "固化剂量",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141],
      },
    ],
  };

  option && myChart.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.multi-bar-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
