import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import useSearchStore from "./useSearchStore";
import useNotificationStore from "./useNotificationStore";
import useLoginStore from "./useLoginStore";
import useNavStore from "./useNavStore";
import usePlayingStore from "./usePlayingStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);
const notificationStore = useNotificationStore(pinia);
const loginStore = useLoginStore(pinia);
const navStore = useNavStore(pinia);
const playingStore = usePlayingStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas, isLoading } = storeToRefs(searchStore);
    const { isShow, content, type } = storeToRefs(notificationStore);
    const { isLogin, loginedUser } = storeToRefs(loginStore);
    const { isInLogin } = storeToRefs(navStore);
    const { playingKeyword, videoURL, routes } = storeToRefs(playingStore);

    return {
      keyword,
      serarchResDatas,
      isLoading,
      isShow,
      content,
      type,
      isLogin,
      loginedUser,
      isInLogin,
      playingKeyword,
      videoURL,
      routes,
    };
  },
  actions: {
    setKeyword: searchStore.setKeyword,
    getSearchResData: searchStore.getSearchResData,
    setIsShow: notificationStore.setIsShow,
    setContent: notificationStore.setContent,
    setType: notificationStore.setType,
    setIsLogin: loginStore.setIsLogin,
    setIsInLogin: navStore.setIsInLogin,
    setPlayingKeyword: playingStore.setPlayingKeyword,
    getPlayingSearchResData: playingStore.getPlayingSearchResData,
  },
});

export default useMainStore;
