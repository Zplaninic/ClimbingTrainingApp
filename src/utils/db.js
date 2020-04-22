import { useState, useEffect } from "react";
import axios from "axios";

const user = window.sessionStorage.getItem("login") || "{}";
let token = JSON.parse(user).token;
console.log(token);
token = JSON.parse(user).token !== undefined ? token : (token = "");
console.log(token);

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
};

export const useDataFromMongo = (
  url,
  setIsLoadingHook,
  isUpdated,
  setIsReload
) => {
  const [routesMongo, setRoutesMongo] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url, options);

      setRoutesMongo(result.data);
      setIsLoadingHook(true);
      setIsReload(false);
    };
    fetchData();
  }, [isUpdated, setIsLoadingHook, setIsReload, url]);

  return routesMongo;
};

export const deleteFromMongo = (url, id, setIsReload) => {
  axios.delete(`${url}${id}`, options);
  setIsReload(true);
};

export const updateMongo = (url, id, updated, setIsReload) => {
  axios.put(`${url}${id}`, updated, options);
  setIsReload(true);
};

export const addToMongo = (url, item, setIsReload) => {
  axios.post(url, item, options);
  setIsReload(true);
};
