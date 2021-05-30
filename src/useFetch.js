import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true); // not used yet
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState(false);

  const getCountries = useCallback(async () => {
    setIsError(false);
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299){
        const countries = await response.json();
        setCountries(countries);
        setIsLoading(false);
    } else {
        setCountries(countries);
        setIsLoading(false);
        setIsError(true);
       
    }
    // const countries = await response.json();
    // setCountries(countries);
    // setIsLoading(false);
  },[url]);

  useEffect(() => {
    getCountries();
  }, [url, getCountries]);
    return { isLoading, countries, isError };

};
