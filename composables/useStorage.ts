// @ts-ignore
import nuxtStorage from "nuxt-storage";
export default function useStorage() {
  return {
    setStorage: (key: string, value: string) => {
      return nuxtStorage.localStorage.setData(key, value);
    },
    getStorage: (key: string) => {
      return nuxtStorage.localStorage.getData(key);
    },
  };
}
