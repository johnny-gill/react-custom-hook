import axios from 'axios';
import { useState } from 'react';

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickFetchUser = () => {
    setUserList([]);
    setIsError(false);
    setIsLoading(true);

    axios
      .get('http://localhost:5000/test')
      .then((res) => setUserList(res.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return { userList, onClickFetchUser, isError, isLoading };
};
