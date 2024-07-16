import axios from "axios";

function useApi(token = null) {
  return axios.create({
    baseURL: "https://el-elohe-production.onrender.com/api",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export default useApi;
