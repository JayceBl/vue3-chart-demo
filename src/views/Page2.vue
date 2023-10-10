<template>
  <div class="page2">
    <div class="item1"><AutoList /></div>
    <div class="item2">1</div>
    <div class="item3">1</div>
    <div class="item4">1</div>
    <div class="item5">1</div>
    <div class="item6">1</div>
    <div class="item7">1</div>
    <div class="item8">1</div>
    <div class="item9"><BarChart /></div>
  </div>
</template>

<script setup>
import { BarChart, ChinaMap } from "@/components/chart/index.js";
import AutoList from "../components/AutoList.vue";
</script>

<style lang="scss" scoped>
.page2 {
  display: grid;
  grid-template-rows: repeat(3, 33.33%);
  grid-template-columns: repeat(3, 33.33%);
  grid-template-areas:
    "item1 item2 item3"
    "item4 item5 item6"
    "item7 item8 item9";

  height: calc(100% - 80px);
}

.page2 > div {
  border-radius: 5px;
  place-items: center;
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

.item6 {
  grid-area: item6;
}

.item7 {
  grid-area: item7;
}

.item8 {
  grid-area: item8;
  background-color: lightcoral;
}

.item9 {
  grid-area: item9;
}
</style>
