import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptior = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptior);

export { $host, $authHost };
