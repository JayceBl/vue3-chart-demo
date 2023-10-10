<template>
  <div>{{ foo }}</div>
</template>

<script setup>
const props = defineProps(["foo"]);

console.log(props.foo);
</script>

<style lang="scss" scoped></style>
