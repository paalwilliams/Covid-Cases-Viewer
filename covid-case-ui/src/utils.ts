import axios, { Axios } from "axios";
export const createAxiosClient = (): Axios => {
  axios.defaults.baseURL = "http://localhost:3000";
  return axios;
};
