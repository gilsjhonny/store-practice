import React from 'react';

export const useFetch = (url) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return data;
};
