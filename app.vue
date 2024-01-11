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
    </div>
    <div class="dynamic-parts-wrapper">
      <NuxtPage />
    </div>
  </div>
</template>
