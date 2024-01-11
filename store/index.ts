import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import useSearchStore from "./useSearchStore";
import useNotificationStore from "./useNotificationStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);
const notificationStore = useNotificationStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas, isLoading } = storeToRefs(searchStore);
    const { isShow, content, type } = storeToRefs(notificationStore);

    return { keyword, serarchResDatas, isLoading, isShow, content, type };
  },
  actions: {
    setKeyword: searchStore.setKeyword,
    getSearchResData: searchStore.getSearchResData,
    setIsShow: notificationStore.setIsShow,
    setContent: notificationStore.setContent,
    setType: notificationStore.setType,
  },
});

export default useMainStore;
