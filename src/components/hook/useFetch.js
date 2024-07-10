import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((error) => {
        console.error("Error:", error);
        setState("Error fetching data");
      });
    return () => {
      setState("");
    };
  }, [url]);
  return state;
};

export default useFetch;
