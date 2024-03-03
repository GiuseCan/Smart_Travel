import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/smart_travel_api/'
  });

export default axiosClient