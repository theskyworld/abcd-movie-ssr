import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import useSearchStore from "./useSearchStore";
import useNotificationStore from "./useNotificationStore";
import useLoginStore from "./useLoginStore";
import useNavStore from "./useNavStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);
const notificationStore = useNotificationStore(pinia);
const loginStore = useLoginStore(pinia);
const navStore = useNavStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas, isLoading } = storeToRefs(searchStore);
    const { isShow, content, type } = storeToRefs(notificationStore);
    const { isLogin, loginedUser } = storeToRefs(loginStore);
    const { isInLogin } = storeToRefs(navStore);

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
  },
});

export default useMainStore;
