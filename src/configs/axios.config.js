import axios from "axios";
import { appConfig } from "./app.config";

/**
 *
 * @param {*Object} config
 * Takes a global config object that includes the user authToken.
 *
 */
export const axiosConfig = function(config = {}) {
  axios.defaults.baseURL = appConfig.baseApiEndpoint;
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + config.authToken || "";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  // axios.defaults.headers.Authorization = "Bearer " + config.authToken || "";
  // axios.defaults.headers.common["Authorization"] = "Bearer " + config.authToken || "";
  // axios serializes to json by default
  // axios.defaults.headers.post['Content-Type'] = 'application/json'
};
