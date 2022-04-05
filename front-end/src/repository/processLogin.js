import axios from "axios";
import CONFIG from "../config/index";
const LOGIN_API_URL = `${CONFIG.API_URL}/auth`;

async function processLogin(form) {
  return axios.post(`${LOGIN_API_URL}/signin`, form);
}

export default {
  processLogin,
};
