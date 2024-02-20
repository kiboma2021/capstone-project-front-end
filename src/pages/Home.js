/* eslint-disable import/prefer-default-export */

import useFetch from '../hooks/useFetch';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div>
      <p>Main Page</p>
    </div>
  );
};
