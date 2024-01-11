<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

useHead({
  title: "ABCD影视",
});

const { get } = useAxios();
const isLoading = ref(true);
const swiperDatas: any = ref({});
const bingeWatchDatas: any = ref({});
const hotPlayingDatas: any = ref({});
const bingeWeeklyDatas: any = ref({});
const bestMoviesInWeekDatas: any = ref({});
const bestMoviesInMonthDatas: any = ref({});

onBeforeMount(async () => {
  const datas = await get("/home");
  swiperDatas.value = datas[0];
  bingeWatchDatas.value = datas[1];
  hotPlayingDatas.value = datas[2];
  bingeWeeklyDatas.value = datas[3];
  bestMoviesInMonthDatas.value = datas[4];
  bestMoviesInWeekDatas.value = datas[5];

  isLoading.value = false;
});
</script>
<template>
  <LoadingWrapper :flag="isLoading">
    <div class="home-page-container">
      <Teleport to=".home-page-swiper-container">
        <div class="home-page-swiper-wrapper">
          <BaseHomePageSwiper
            :imgList="swiperDatas.imgURLs"
            :videoTitles="swiperDatas.videoTitles"
            :videoTags="swiperDatas.videoTags"
          />
        </div>
      </Teleport>
      <Teleport to=".video-shows-container">
        <div class="video-shows-wrapper">
          <BingeWatch
            :video-titles="bingeWatchDatas.videoTitles"
            :imgURLs="bingeWatchDatas.imgURLs"
            :video-tags="bingeWatchDatas.videoTags"
            :video-scores="bingeWatchDatas.videoScores"
          />
          <HotPlaying
            :video-titles="hotPlayingDatas.videoTitles"
            :imgURLs="hotPlayingDatas.imgURLs"
            :video-tags="hotPlayingDatas.videoTags"
            :video-scores="hotPlayingDatas.videoScores"
          />
          <BingeWeekly
            :video-titles="bingeWeeklyDatas.videoTitles"
            :imgURLs="bingeWeeklyDatas.imgURLs"
            :video-tags="bingeWeeklyDatas.videoTags"
            :video-episodes="bingeWeeklyDatas.videoEpisodes"
            :video-scores="bingeWeeklyDatas.videoScores"
          />
          <BestMoviesInWeek
            :video-titles="bestMoviesInWeekDatas.videoTitles"
            :imgURLs="bestMoviesInWeekDatas.imgURLs"
            :video-tags="bestMoviesInWeekDatas.videoTags"
            :video-scores="bestMoviesInWeekDatas.videoScores"
          />
          <BestMoviesInMonth
            :video-titles="bestMoviesInMonthDatas.videoTitles"
            :imgURLs="bestMoviesInMonthDatas.imgURLs"
            :video-tags="bestMoviesInMonthDatas.videoTags"
            :video-scores="bestMoviesInMonthDatas.videoScores"
          />
        </div>
      </Teleport>
    </div>
  </LoadingWrapper>
</template>
<style scoped lang="scss">
@use "./index.scss";
</style>
