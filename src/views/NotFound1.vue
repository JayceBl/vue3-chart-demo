<template>
  <div class="not-found">
    <h1 class="not-found-text">404</h1>
    <div class="divider"></div>
    <div class="not-found-message">
      <p class="not-found-message">
        您访问的页面不存在，请检查URL是否正确或返回<a href="/vue3-chart-demo/"
          >首页</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found-text {
  font-size: 6rem;
  margin-right: 20px; /* 404文本和竖线之间的间距 */
}

.divider {
  border-left: 2px solid #000; /* 竖线的样式 */
  height: 100px; /* 竖线的高度，可以根据需要调整 */
  margin-left: 20px; /* 竖线与消息之间的间距 */
}

.not-found-message {
  font-size: 1.2rem;
}

.not-found-message a {
  text-decoration: none;
  color: #007bff; /* 链接文本颜色 */
  font-weight: bold;
}
</style>
