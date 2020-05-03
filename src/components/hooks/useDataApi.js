import { useState, useEffect } from "react";
import axios from "axios";

const useDataApi = (initialUrl, isUpdatedFromDatabase) => {
  //setIsUpdatddMIssing
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios.get(url, { withCredentials: true });
        setData(result.data);
        console.log("DataApiUpdated", isUpdatedFromDatabase);
        // setIsUpdatedFromDatabase(false);
      } catch (e) {
        setIsError(true);
      }
    };
    fetchData();
  }, [url, isUpdatedFromDatabase]);
  return [{ data, isError }];
};

export default useDataApi;
