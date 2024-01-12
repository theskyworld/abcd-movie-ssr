<script setup lang="ts">
import { ref } from "vue";
const activedTitle = ref("电视剧首页");
</script>
<template>
  <div class="tv-page-container">
    <div class="title-wrapper">
      <h2
        :class="{ active: activedTitle === '电视剧首页' }"
        @click="activedTitle = '电视剧首页'"
      >
        电视剧首页
      </h2>
      <!-- 分割线 -->
      <div class="separator"></div>
      <h2
        :class="{ active: activedTitle === '电视剧库' }"
        @click="activedTitle = '电视剧库'"
      >
        电视剧库
      </h2>
    </div>
    <div class="content-wrapper">
      <PageHome
        url="/tv/tv-home"
        :episode="true"
        v-if="activedTitle === '电视剧首页'"
      />
      <PageLibraries v-else :tv="true" url="/tv/tv-libraries" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./index.scss";
</style>
