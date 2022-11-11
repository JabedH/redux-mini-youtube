import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://redux-mini-youtube-server-production.up.railway.app",
});

export default axiosInstance;
