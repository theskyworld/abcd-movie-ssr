import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export default function useAxios() {
  // TODO增加isRequesting的逻辑
  const get = (
    url: string,
    params?: Record<string, string | number | boolean>,
  ) => {
    return instance
      .get(url, params)
      .then((res) => {
        return res.data.items;
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const post = () => {};

  const put = () => {};

  return {
    get,
  };
}
