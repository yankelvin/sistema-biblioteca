import axios from "axios";

const api = axios.create({
  baseURL: "https://toth-biblioteca-api.herokuapp.com/api"
});

export default api;
