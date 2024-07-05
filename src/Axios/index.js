// axiosSetup.js
import axios from "axios";

// const baseURL = "http://127.0.0.1:3091/api/v1/";
const baseURL = "http://127.0.0.1:5001/api/";

export default function runAxiosSetup({ token = "", headers = {} }) {
  // Set the base URL for all axios requests
  axios.defaults.baseURL = baseURL;

  // Set default headers for all axios requests
  axios.defaults.headers = {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
    ...headers,
  };

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      // Return the response if the status code is 2xx
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx causes this function to trigger
      // Handle errors
      let errorObject = {};
      if (error.response) {
        // Server responded with a status other than 2xx
        errorObject.message =
          Object.values(error.response?.data?.errors || {})?.[0]?.join(", ") ||
          error.response.data.message ||
          "Server Error!!!";
        errorObject.code = error.response.data.code || "X_SERVER_ERROR";
        errorObject.type = error.response.status;
        errorObject.data = error.response.data;
      } else if (error.code === "ERR_NETWORK") {
        // Network error occurred
        errorObject.message = "Network Error!!!";
        errorObject.code = "X_NETWORK_ERROR";
        errorObject.type = 0;
      } else {
        // Other errors
        errorObject.message = error.message || "Unknown Error!!!";
        errorObject.code = error.code || "X_UNKNOWN_ERROR";
        errorObject.type = error.type || 0;
        errorObject.data = error.data || null;
      }
      return Promise.reject(errorObject);
    }
  );
}
