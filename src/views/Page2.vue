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
import { BarChart } from "@/components/chart/index.js";
import AutoList from "../components/AutoList.vue";
</script>

<style lang="scss" scoped>
.page2 {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.page2 > div {
  border-radius: 5px;
  place-items: center;
}
</style>
