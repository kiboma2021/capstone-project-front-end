import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchBooks();
  }, [url]);

  return { data };
};

export default useFetch;
