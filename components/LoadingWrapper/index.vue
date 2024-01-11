<script setup lang="ts">
const { flag } = defineProps(["flag"]);
</script>
<template>
  <div class="loading-wrapper-container">
    <BaseLoading class="loading-container" v-if="flag" />
    <slot v-else></slot>
  </div>
</template>
<style scoped lang="scss">
@use "./loadingWrapper.scss";
</style>
