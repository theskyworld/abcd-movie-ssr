<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

useHead({
  title: "ABCD影视",
});

const { get } = useAxios();
const isLoading = ref(true);
const swiperDatas: any = ref({});
const bingeWatchDatas: any = ref({});
onBeforeMount(async () => {
  const datas = await get("/home");
  swiperDatas.value = datas[0];
  bingeWatchDatas.value = datas[1];
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
        </div>
      </Teleport>
    </div>
  </LoadingWrapper>
</template>
<style scoped></style>
