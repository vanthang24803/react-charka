import axios from "axios";
import Cookies from "js-cookie";
import { env } from "./env";

const token = Cookies.get("access");

const _http = axios.create({
  baseURL: env,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default _http;
