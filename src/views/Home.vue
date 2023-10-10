<template>
  <div class="container">
    <header class="header">
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
        </ul>
      </nav>
      <div class="title">可视化大屏</div>
    </header>

    <div class="main">
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
  height: 100%;
  background-color: lightcoral;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  font-size: 24px;
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

.main {
  height: calc(100vh - 80px);
  background-color: #f0f0f0;
}
</style>
