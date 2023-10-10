<template>
  <div class="china-map" ref="chinaMapRef"></div>
</template>

<script setup>
import * as echarts from "echarts";
import chinaMapJson from "../../assets/chinaMap.json";
import { onMounted, ref } from "vue";

const chinaMapRef = ref(null);
const chartInstance = ref(null);

let option = {};

const initChart = () => {
  chartInstance.value = echarts.init(chinaMapRef.value);
  echarts.registerMap("china", chinaMapJson);

  option = {
    title: {
      text: "客户分布",
      left: 20,
      top: 20,
    },
    legend: {
      left: "5%",
      bottom: "5%",
      orient: "vertical",
    },
    geo: {
      type: "map",
      map: "china",
      top: "5%",
      bottom: "5%",
      itemStyle: {
        areaColor: "#2E72BF",
        borderColor: "#333",
      },
    },
  };

  chartInstance.value.setOption(option);
};

const updateChart = () => {
  option = {};
};

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.china-map {
  width: 100%;
  height: 100%;
}
</style>
