import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (baseURL, subDirectory) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + subDirectory);
        setResponse(res.data);
        console.log(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [baseURL, subDirectory]);

  return [ response, error ];
};

export default useAxios;

// function useAxios(keyInLS, baseUrl) {
//   const [responses, setResponses] = useLocalStorage(keyInLS);

//   const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//     const response = await axios.get(`${baseUrl}${restOfUrl}`);
//     setResponses(data => [...data, formatter(response.data)]);
//   };

//   const clearResponses = () => setResponses([]);

//   return [responses, addResponseData, clearResponses];
// }
