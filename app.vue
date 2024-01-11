<script setup lang="ts">
import { storeToRefs } from "pinia";
// @ts-ignore
import useMainStore from "~/store";
const { isShow, content, type } = storeToRefs(useMainStore());
</script>

<template>
  <div class="app-container">
    <BaseNotification v-if="isShow" :content="content" :type="type" />
    <div class="static-parts-wrapper">
      <div class="nav-bar-wrapper" ref="navBarWrapperRef">
        <NavBar />
      </div>
      <div class="side-menus-wrapper">
        <BaseSideMenus />
      </div>
    </div>
    <div class="dynamic-parts-wrapper">
      <NuxtPage />
    </div>
  </div>
</template>
<style scoped lang="scss">
// TODO 将来将其抽离出去
// 修改滚动条样式
@mixin scroll() {
  // 整个滚动条容器样式
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  // 滚动条轨道样式
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  // 滚动条滑块样式
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

    background-color: #555;
  }
}
.static-parts-wrapper {
  .from-home-page {
    width: 100vw;
    height: 100vh;
    @include scroll();
    overflow-y: auto;
    overflow-x: hidden;
    .home-page-swiper-container {
      position: relative;
      width: 100%;
      height: 66%;
      z-index: 1;
    }
    .video-shows-container {
      position: relative;
      top: 30px;
      left: 180px;
      z-index: 5;
    }
  }
  .nav-bar-wrapper {
    position: fixed;
    z-index: 9;
    top: 0;
  }
  .side-menus-wrapper {
    position: absolute;
    z-index: 10;
    top: 60px;
  }

  .login-card-wraper {
    position: absolute;
    top: 50px;
    left: 300px;
    width: 800px;
    height: 550px;
    z-index: 50;
    opacity: 0.9;
  }
}

.dynamic-parts-wrapper {
  position: absolute;
  left: 170px;
  top: 70px;
  z-index: 10;
  margin: {
    top: 10px;
  }
}
</style>
