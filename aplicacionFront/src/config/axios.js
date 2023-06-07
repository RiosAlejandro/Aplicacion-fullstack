import axios from "axios";

const customerAxios = axios.create({
  baseURL: 'http://localhost:7000',
});

export default customerAxios;
