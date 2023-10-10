<template>
  <div class="page1">
    <div class="item1">
      <BarChart />
    </div>
    <div class="item2">
      <ChinaMap />
    </div>
    <div class="item3">
      <BarChart />
    </div>
    <div class="item4">4</div>
    <div class="item5">5</div>
  </div>
</template>

<script setup>
import { BarChart, ChinaMap } from "@/components/chart/index.js";
</script>

<style lang="scss" scoped>
.page1 {
  display: grid;
  justify-content: space-between;
  align-content: space-around;
  grid-template-rows: 50% 50%;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
    "item1 item2 item3"
    "item4 item2 item5";
  gap: 10px;

  height: calc(100% - 80px);
  padding: 20px;
}

.page1 > div {
  border-radius: 5px;
  border: 3px solid #000;
}

.item1 {
  grid-area: item1;
}

.item2 {
  grid-area: item2;
}

.item3 {
  grid-area: item3;
}

.item4 {
  grid-area: item4;
}

.item5 {
  grid-area: item5;
}
</style>
