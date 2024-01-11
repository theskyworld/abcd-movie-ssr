<script setup lang="ts">
useHead({
  title: "ABCD影视",
});
const watchedVideos = ref([
  {
    id: 1,
    imgURL: "https://m.ykimg.com/0541010160F63EBA04CD829CF4BB9E9C",
    title: "神话12",
    watchTime: new Date(),
    watchPercent: 12,
  },
  {
    id: 2,
    imgURL: "https://m.ykimg.com/0541010160F63EBA04CD829CF4BB9E9C",
    title: "神话12",
    watchTime: new Date(),
    watchPercent: 12,
  },
  {
    id: 3,
    imgURL: "https://m.ykimg.com/0541010160F63EBA04CD829CF4BB9E9C",
    title: "神话12",
    watchTime: new Date(),
    watchPercent: 12,
  },
  {
    id: 4,
    imgURL: "https://m.ykimg.com/0541010160F63EBA04CD829CF4BB9E9C",
    title: "神话12",
    watchTime: new Date(),
    watchPercent: 12,
  },
  {
    id: 5,
    imgURL: "https://m.ykimg.com/0541010160F63EBA04CD829CF4BB9E9C",
    title: "神话12",
    watchTime: new Date(),
    watchPercent: 12,
  },
]);
</script>
<template>
  <div>首页</div>
  <div>
    <ul v-if="watchedVideos.length">
      <li
        v-for="{ id, imgURL, title, watchTime, watchPercent } in watchedVideos"
        :key="id"
      >
        <BaseWatchHistoryPartCard
          :img-URL="imgURL"
          :title="title"
          :watch-time="watchTime"
          :watch-percent="watchPercent"
        />
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
