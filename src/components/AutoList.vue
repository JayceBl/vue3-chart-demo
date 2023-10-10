<template>
  <div class="scrolling-list">
    <div class="scrolling-list-container" ref="listContainer">
      <div
        class="list-item"
        v-for="(item, index) in displayedItems"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([]); // 数据源
const displayedItems = ref([]); // 显示的数据
const visibleItemCount = 5; // 可见的项数

const listContainer = ref(null);

items.value = [1, 2, 3, 4, 5, 6, 7, 8];

onMounted(() => {
  // 初始化显示的数据
  displayedItems.value = items.value.slice(0, visibleItemCount);

  // 监听滚动事件，当滚动到顶部时加载更多数据
  listContainer.value.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (listContainer.value.scrollTop === 0) {
    // 如果滚动到了顶部
    const startIndex = displayedItems.value.length;
    const endIndex = startIndex + visibleItemCount;
    const newItems = items.value.slice(startIndex, endIndex);
    displayedItems.value = [...newItems, ...displayedItems.value];

    // 恢复滚动位置，避免滚动到最顶部
    listContainer.value.scrollTop = 1;
  }
};
</script>

<style scoped>
.scrollling-list {
  width: 200px;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
}

.scrolling-list-container {
  width: 100%;
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
</style>
