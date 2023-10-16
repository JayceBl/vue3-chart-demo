<template>
  <section class="container">
    <div class="device"><BarChart /></div>
    <div class="error-log"><ErrorLogTable /></div>
    <div class="c"><BarChart /></div>
    <div class="completeness"><GaugeChart /></div>
    <div class="e"><BarChart /></div>
  </section>
</template>

<script setup>
import { BarChart, GaugeChart } from "@/components/chart/index.js";
import ErrorLogTable from "../components/ErrorLogTable.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "device c completeness"
    "error-log c e";
}

.printer-info {
  grid-area: device;
}

.error-log {
  grid-area: error-log;
}

.c {
  grid-area: c;
}

.completeness {
  grid-area: completeness;
}

.e {
  grid-area: e;
}
</style>
