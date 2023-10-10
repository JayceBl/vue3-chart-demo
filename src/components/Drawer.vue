<template>
  <transition name="fade">
    <div class="drawer">
      <div class="drawer-content">
        <!-- Drawer content goes here -->
        <slot></slot>
      </div>
      <div class="overlay" @click="closeDrawer"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const { isOpen } = defineProps(["isOpen"]);

console.log(isOpen);

const closeDrawer = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: translateX(300px);
  transition: transform 0.3s ease-in-out;
}

.drawer-content {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

.overlay.active {
  display: block;
}
</style>
