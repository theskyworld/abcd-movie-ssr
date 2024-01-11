<script setup lang="ts">
useHead({
  title: "ABCD影视",
});
const imgURL = ref("https://imgapi.xl0408.top/index.php");
</script>
<template>
  <div>首页</div>
  <div>
    <BaseProfile :imgURL="imgURL" />
  </div>
</template>
<style scoped></style>
