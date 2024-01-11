import { defineStore } from "pinia";
import { ref } from "vue";
import type { MessageType } from "~/components/Base/Notification/types";

const { get } = useAxios();

const useNotificationStore = defineStore("notification", {
  state: () => {
    const isShow = ref(false);
    const content = ref("");
    const type: Ref<MessageType> = ref("info");
    return {
      isShow,
      content,
      type,
    };
  },

  actions: {
    setIsShow(isShow: boolean) {
      this.isShow = isShow;
    },
    setContent(content: string) {
      this.content = content;
    },
    setType(type: MessageType) {
      this.type = type;
    },
  },
});

export default useNotificationStore;
