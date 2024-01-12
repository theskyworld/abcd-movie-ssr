import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export default function useAxios() {
  // TODO增加isRequesting的逻辑
  const get = (url: string, config?: Record<string, any>) => {
    return instance
      .get(url, config)
      .then((res) => {
        if (res.data.items) {
          return res.data.items;
        } else {
          return res.data;
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const post = (
    url: string,
    data?: Record<string, any>,
    config?: Record<string, any>,
  ) => {
    return instance.post(url, data, config);
  };

  const put = () => {};

  return {
    get,
    post,
  };
}
