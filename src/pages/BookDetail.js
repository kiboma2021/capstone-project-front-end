/* eslint-disable import/prefer-default-export */

import { useEffect, useState } from 'react';
// eslint-disable-next-line
import { useParams } from 'react-router';

export const BookDetail = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const url = `http://localhost:8000/books/${params.id}`;

  useEffect(() => {
    async function getBook() {
      const response = await fetch(url);
      const result = await response.json();
      setBook(result);
    }
    getBook();
  }, [url]);

  console.log(book);

  return (
    <div>
      <a href="/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={book.image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
        </div>
      </a>

    </div>
  );
};
