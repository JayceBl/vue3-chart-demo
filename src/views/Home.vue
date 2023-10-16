<template>
  <div class="container">
    <!-- <header class="header">
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page1' }">Page1</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page2' }">Page2</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page3' }">Page3</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page4' }">Page4</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page5' }">Page5</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'Page6' }">Page6</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="title">可视化大屏</div>
    </header> -->

    <div class="main">
      <button class="settings">1+1</button>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  // background-color: lightcoral;

  .main {
    // height: calc(100vh - 50px);
    height: 100%;
    background-color: black;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  font-size: 18px;
  // background-color: lightgray;
}

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

.navbar-list {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-right: 20px;
}

.router-link-exact-active {
  // 添加选中时的样式
  font-weight: bold;
}

.settings {
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid black;
}
</style>
