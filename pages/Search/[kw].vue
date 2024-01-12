<script setup lang="ts">
import { ref, onBeforeMount, watch, computed } from "vue";
// @ts-ignore
import useMainStore from "~/store";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const mainStore = useMainStore();
const { keyword, serarchResDatas, isLoading } = storeToRefs(mainStore);
const datas = computed(() => (serarchResDatas?.value as any).curPageData);
const isLoadingData = computed(() => isLoading.value);
const searchKey = computed(() => useRoute().params.kw);
</script>

<template>
  <LoadingWrapper :flag="isLoadingData">
    <div class="search-res-page-container">
      <div class="header-wrapper">
        <p>搜索</p>
        <p class="keyword">"{{ searchKey }}"</p>
        <p>,为你找到以下结果:</p>
      </div>
      <div class="seperate-line"></div>
      <div class="video-show-card-wrapper">
        <BaseVideoShowCard
          v-for="(i, index) in datas.length"
          :key="index"
          :title="datas[index].title"
          :imgURL="datas[index].videoURL.pic"
          :type="datas[index].type"
          is-default
        />
      </div>
      <div class="not-found" v-if="!isLoadingData && datas.length === 0">
        没有找到
      </div>
    </div>
  </LoadingWrapper>
</template>
<style scoped lang="scss">
@use "./index.scss";
</style>
