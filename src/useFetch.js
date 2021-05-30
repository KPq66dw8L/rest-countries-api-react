import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getCountries();
  }, [url, getCountries]);
  return { loading, countries };
};
