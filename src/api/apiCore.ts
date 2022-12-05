import axios, { AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";

// default
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
axios.defaults.withCredentials = true;

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// intercepting to capture errors
axios.interceptors.response.use(
  (response) => {
    // console.log("INTERCEPTOR RESPONSE: ", response);
    return response.data ? response.data : response;
  },
  async function (error) {
    const originalRequest = error.response;
    const retryRequest = error.config;
    // console.log("INTERCEPTOR REQUEST ERROR: ", originalRequest);
    if (
      error.config.url === "/authentication/refresh" &&
      error?.response?.status === 401
    ) {
      return Promise.reject(originalRequest);
    }
    if (
      error?.response?.status === 401 &&
      error?.config?.url !== "/authentication/refresh" &&
      error?.config?.url !== "authentication" &&
      error?.config?.url !== "/authentication/logout" &&
      error?.config?.url !== "/authentication/login"
    ) {
      return await axios
        .get("/authentication/refresh", {
          withCredentials: true,
        })
        .then((resp) => {
          return axios.request(retryRequest);
        });
    }
    return Promise.reject(originalRequest?.data?.message);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */
  get = (url: string, config?: AxiosRequestConfig) => {
    return axios.get(url, config);
  };

  /**
   * post given data to url
   */
  create = (url: string, data?: {}, config?: AxiosRequestConfig) => {
    if (config) return axios.post(url, data, config);
    return axios.post(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data?: {}) => {
    return axios.put(url, data);
  };

  patch = (url: string, data?: {}) => {
    return axios.patch(url, data);
  };

  /**
   * Delete
   */
  delete = (url: string, config?: {}) => {
    return axios.delete(url, { ...config });
  };

}

const getLoggedUser = () => {
  const { "@SGSystem.User": cookieUser } = parseCookies();
  if (cookieUser && cookieUser !== undefined) {
    try {
      return JSON.parse(cookieUser);
    } catch (err) {
      console.error(err);
    }
  }
  return null;
};

export { APIClient, getLoggedUser };
