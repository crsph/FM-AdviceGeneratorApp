import axios from "axios";

const BASE_URL = "https://api.adviceslip.com/advice";

export const GetAdvice = () => {
  return axios.get(BASE_URL);
};
