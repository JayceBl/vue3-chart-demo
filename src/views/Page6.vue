<template>
  <div class="container">
    <div class="a"><BarChart /></div>
    <div class="b"><BarChart /></div>
    <div class="c"><BarChart /></div>
    <div class="d"><BarChart /></div>
    <div class="e"><BarChart /></div>
  </div>
</template>

<script setup>
import { BarChart } from "@/components/chart/index.js";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  grid-auto-flow: row;
  grid-template-areas:
    "a b c"
    "d e e";
}

.a {
  grid-area: a;
}

.b {
  grid-area: b;
}

.c {
  grid-area: c;
}

.d {
  grid-area: d;
}

.e {
  grid-area: e;
}
</style>
