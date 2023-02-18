import { useEffect, useState } from "react";
import axios from "axios";

/* Used to make an Axios request
receives two arguments, baseURL and subDirectory
*/

const useAxios = (baseURL, subDirectory) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    // If no argument is received, returns null so that an error does not occur during
    // unintentional calls of the hook.
    if (baseURL && subDirectory) {
      const fetchData = async () => {
        try {
          const res = await axios.get(baseURL + subDirectory);
          setResponse(res.data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    } else {
      setResponse(null);
      setError(null);
    }
  }, [baseURL, subDirectory]);

  return [ response, error ];
};

export default useAxios;
