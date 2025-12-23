import { useEffect, useState } from "react";

const useFetch = (data) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(data);
  }, [data]);

  return result;
};

export default useFetch;
