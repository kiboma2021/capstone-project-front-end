/* eslint-disable import/prefer-default-export */

import useFetch from '../hooks/useFetch';
// eslint-disable-next-line import/no-cycle
import { BookCard } from '../components';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);
  return (
    <div>
      {data && data.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};
