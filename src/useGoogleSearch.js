import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
require("dotenv").config();

const CONTEXT_KEY = "763b837a38faac1c7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
