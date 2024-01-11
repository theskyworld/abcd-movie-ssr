<script setup lang="ts">
import { computed } from "vue";
import type { VideoShowCardProps } from "./types";
// @ts-ignore
import useMainStore from "~/store";
import { useRouter } from "vue-router";

const mainStore = useMainStore();
const router = useRouter();

const {
  title,
  imgURL,
  tag,
  type,
  score,
  episode,
  isRow,
  isColumn,
  isDefault,
  rank,
} = defineProps<VideoShowCardProps>();

const rankBgColor = computed(() => {
  switch (rank) {
    case 1:
      return "red";
    case 2:
      return "#FF752A";
    case 3:
      return "#FFA721";
    default:
      return "#9E9E9E";
  }
});

// 传入title作为参数，避免在追剧周表中不同天数但同一次序下的卡片跳转播放页面时相同标题的问题
async function toPlayingPage(title: string) {
  router.push({
    path: "/playing",
  });
  mainStore.setPlayingKeyword(title);
  await mainStore.getPlayingSearchResData();
}
</script>
<template>
  <div
    class="video-show-card-container"
    :class="{ row: isRow, column: isColumn, default: isDefault }"
    @click="toPlayingPage(title)"
  >
    <div class="img-wrapper">
      <img :src="imgURL" :alt="title" />
      <span class="rank" v-if="rank"
        ><p>{{ rank }}</p></span
      >
      <span class="type" v-if="type">{{ type }}</span>
      <span class="label" v-if="tag">{{ tag }}</span>
      <span class="score" v-if="score">{{ score }}</span>
      <span class="episodes" v-if="episode">{{ episode }}</span>
    </div>
    <div class="video-info-wrapper">
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="watch-percent">
        <!-- <span>看至{{ watchPercent }}集</span> -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./videoShowCard.scss";
.rank {
  background-color: v-bind(rankBgColor);
}
</style>
