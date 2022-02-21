import { useState, useEffect } from 'react';

export default function useFetch(url, method, input) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        // GET method
        method: method,
        headers: { 'Content-Type': 'application/json' },
      }
      if (input) {
        // POST method
        options.body = JSON.stringify({ name: input })
      }

      const itmRes = await fetch(url, options);

      // Err handling
      console.log('itmRes.ok: ', itmRes.ok)
      if (!itmRes.ok) {
        throw new Error(`HTTP error! status: ${itmRes.status}`)
      }

      // Extracting data as a JSON Object from the response
      const itmData = await itmRes.json();

      // set items and re-render the component
      setData(itmData?.items);
    }

    fetchData();
  }, [url, method, input]);

  return data;
};
