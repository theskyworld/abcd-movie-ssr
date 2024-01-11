<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import type { MessageProps } from "./types";

const { content, type } = defineProps<MessageProps>();

const isClose = ref(false);
const bgColor = computed(() => {
  switch (type) {
    case "info":
      return "#fff3cd";
    case "error":
      return "#F8D7DA";
    case "success":
      return "#d1e7dd";
    default:
      return "#d1e7dd";
  }
});

const timer = setTimeout(() => {
  isClose.value = true;
}, 5000);

onUnmounted(() => {
  clearTimeout(timer);
});
</script>
<template>
  <div class="notification-container">
    <div class="notification" :role="type" v-show="!isClose">
      <span>{{ content }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./notification.scss";

.notification-container {
  .notification {
    background-color: v-bind(bgColor);
  }
}
</style>
