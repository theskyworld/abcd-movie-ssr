<script setup lang="ts">
import { storeToRefs } from "pinia";
// @ts-ignore
import useMainStore from "~/store";
// @ts-ignore
import { playM3u8 } from "~/assets/ts/m3u8Parser";
import { ref, computed, watchEffect, watch, onBeforeMount } from "vue";
import type { VideoURL } from "./types";

// @ts-ignore
const { get } = useAxios();
const videoElem = ref();
const mainStore = useMainStore();
// 当前线路
const curURLIndex = ref(1);
// 当前集数
const curEpisodeIndex = ref(1);

function setCurEpisodeIndex(index: number) {
  curEpisodeIndex.value = index;
}

// 避免多次迅速点击线路请求
const canClick = ref(true);

const { playingKeyword, videoURL, routes } = storeToRefs(mainStore);

// 当前视频总的集数，如果为1，则表示为电影或短视频等
const episodesAmount =
  computed(() => (videoURL.value as VideoURL)?.episodesAmount) || ref(1);
// 当前视频的播放url
const episodeURL =
  computed(() => (videoURL.value as VideoURL)?.episodeURL) || ref("");
// 当前视频的所有集数的标题，例如正片，第一集，花絮等
const episodeNames =
  computed(() => (videoURL.value as VideoURL)?.episodeNames) || ref([]);

// 决定加载视频url之前加载动画的是否展示
const isLoadingURL = ref(true);

watch([curURLIndex, curEpisodeIndex], async () => {
  canClick.value = false;
  // 当前集数不变，获取新的线路播放url
  await mainStore.getPlayingSearchResData(
    true,
    curURLIndex.value - 1,
    curEpisodeIndex.value - 1,
  );
  canClick.value = true;
});

watchEffect(async () => {
  if (!episodeURL.value) {
    isLoadingURL.value = true;
  } else {
    isLoadingURL.value = false;
  }
  if (episodeURL.value) {
    playM3u8(episodeURL.value, videoElem.value);
  }
});

const recommendDatas = ref<Array<Array<string>>>([]);

onBeforeMount(async () => {
  recommendDatas.value = await get("/playing/recommend");
});
</script>
<template>
  <div class="playing-page-container">
    <div class="top-content-wrapper">
      <div class="video-wrapper">
        <video ref="videoElem" class="videoElem" controls></video>
        <!-- TODO1.增加暂无片源时的处理逻辑以及对应的提示 -->
        <!-- TODO2.需要解决相同名称但是不同类型的视频（例如播放夜幕降临的电视剧，但是由于存在相同名称的电影而纳入电视剧的线路中），导致在切换线路时可能切换到电影进行播放的情况 -->
        <div class="video-loading-animation-wrapper" v-if="isLoadingURL">
          <BaseVideoLoadingAnimation />
        </div>
      </div>
      <div class="video-infos-wrapper">
        <div class="video-title-wrapper">
          <h3>{{ playingKeyword }}</h3>
        </div>
        <div class="video-url-routes-wrapper">
          <h4 class="title">选集播放</h4>
          <div class="routes">
            <select
              v-show="canClick"
              v-model="curURLIndex"
              name="urlRoutes"
              id="pet-select"
            >
              <option
                :disabled="!canClick"
                v-for="(i, index) in routes"
                :key="index"
                :value="i"
              >
                <p>线路{{ i }}</p>
              </option>
            </select>
            <i v-show="!canClick">
              <img src="@/assets/imgs/loading.gif" alt="" />
            </i>
          </div>
        </div>
        <div class="video-episodes-wrapper">
          <!-- 只存在一集 -->
          <span v-if="episodesAmount === 1"
            >{{ episodeNames && episodeNames[0] }}
            <BasePlayingAnimation class="playing-animation" />
          </span>
          <!-- 存在多集数 -->
          <span
            @click="setCurEpisodeIndex(index + 1)"
            :class="{ playing: curEpisodeIndex === index + 1 }"
            v-else
            v-for="(i, index) in episodesAmount"
            :key="index"
            >{{ episodeNames && episodeNames[index] }}
            <!-- 当前集数正在播放的动画 -->
            <PlayingAnimation
              class="playing-animation"
              v-if="curEpisodeIndex === index + 1"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="bottom-content-wrapper">
      <div class="title-wrapper">
        <h4>相关推荐</h4>
      </div>
      <LoadingWrapper :flag="!recommendDatas.length">
        <div class="video-show-card-wrapper">
          <BaseVideoShowCard
            v-for="(i, index) in recommendDatas[0].length"
            :key="index"
            :title="recommendDatas[0][index]"
            :imgURL="recommendDatas[1][index]"
            :tag="recommendDatas[2][index]"
            is-column
          />
        </div>
      </LoadingWrapper>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./index.scss";
</style>
