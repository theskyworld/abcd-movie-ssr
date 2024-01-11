import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export default function useAxios() {
  const get = (
    url: string,
    params?: Record<string, string | number | boolean>,
  ) => {
    return instance
      .get(url, params)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const post = () => {};

  const put = () => {};

  return {
    get,
  };
}
