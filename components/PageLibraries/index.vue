<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { PageLibrariesProps } from "./types";

const { videoSelectorsData = [], url, tv } = defineProps<PageLibrariesProps>();

const isLoading = ref(true);
// @ts-ignore
const { get } = useAxios();

const page = ref(1);
const kws = ref([
  "undefined",
  "undefined",
  "undefined",
  "undefined",
  "undefined",
]);
const datas = ref<any>([]);

function changeKws(newKws: Array<any>) {
  kws.value = newKws;
}

watchEffect(async () => {
  // 获取总的数据
  datas.value = await get(`${url}?page=${page.value}&kws=${kws.value}`);

  if (isLoading.value) {
    isLoading.value = false;
  }
});
</script>
<template>
  <LoadingWrapper :flag="isLoading">
    <div v-if="!isLoading" class="page-libraries-container">
      <div class="video-selectors-wrapper">
        <BaseTVSelectors v-if="tv" />
        <BaseVideoSelectors
          v-else
          @doChangeKws="changeKws"
          :videoSelectors="videoSelectorsData"
        />
      </div>
      <div class="video-show-card-wrapper">
        <BaseVideoShowCard
          v-for="(i, index) in datas[0].length"
          :key="index"
          :title="datas[0][index]"
          :imgURL="datas[1][index]"
          :score="datas[2][index]"
          :episode="datas[3][index]"
          is-default
        />
      </div>
    </div>
  </LoadingWrapper>
</template>
<style scoped lang="scss">
@use "./pageLibraries.scss";
</style>
