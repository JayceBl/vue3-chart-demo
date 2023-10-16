<template>
  <section class="layout">
    <div><BarChart /></div>
    <div><BarChart /></div>
    <div><BarChart /></div>
    <div><BarChart /></div>
    <div><BarChart /></div>
    <div><BarChart /></div>
    <div><BarChart /></div>
  </section>
</template>

<script setup>
import { BarChart } from "@/components/chart/index.js";
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
</style>
