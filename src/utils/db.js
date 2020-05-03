import axios from "axios";

export const deleteFromMongo = async (url, id, setIsReload) => {
  try {
    await axios.delete(`${url}${id}`, { withCredentials: true });
    setIsReload(true);
  } catch (e) {
    console.error(e);
  }
};

export const updateMongo = async (url, id, updated, setIsReload) => {
  try {
    await axios.put(`${url}${id}`, updated, { withCredentials: true });
    setIsReload(true);
  } catch (e) {
    console.error(e);
  }
};

export const addToMongo = async (url, item, setIsReload) => {
  try {
    axios.post(url, item, { withCredentials: true });
    setIsReload(true);
  } catch (e) {
    console.error(e);
  }
};
