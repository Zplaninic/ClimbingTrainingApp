import { useEffect, useState } from "react";
import axios from "axios";

const useCheckUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/checkToken`, {
          withCredentials: true
        });
        setIsLoggedIn(true);
      } catch (e) {
        setIsLoading(false);
        console.error(e);
      }
    };

    checkUser();
  }, []);

  return [{ isLoggedIn, isLoading }];
};

export default useCheckUser;
