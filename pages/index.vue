<script setup lang="ts">
const { get } = useAxios();

const datas = await get("/anime/anime-home");
const isRequesting = computed(() => !datas || datas.length < 0);
</script>
<template>
  <div>首页</div>
  <div>
    <span v-if="isRequesting" style="color: red">Loading</span>
    <span>{{ datas }}</span>
  </div>
</template>
<style scoped></style>
