import { useState, useEffect } from "react";

const useDataFetching = (dataSource) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await fetch(dataSource);
        const result = await data.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }

    fetchData();
  }, [dataSource]);

  return [loading, error, data];
};

export default useDataFetching;
