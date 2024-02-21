/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */

import useFetch from '../hooks/useFetch';
import { BookCard } from '../components';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);
  return (
    <div>
      <div className="flex flex-col gap-5 text-center mb-5">
        <p className="text-2xl font-bold">ALL BOOKS IN STORE</p>
        <p className="text-gray-400">Please select a book for more details</p>
        <div className="text-3xl text-gray-400">.........................</div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {data && data.map((book) => (
          <div key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};
