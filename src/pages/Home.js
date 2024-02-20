/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */

import useFetch from '../hooks/useFetch';
import { BookCard } from '../components';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data && data.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};
