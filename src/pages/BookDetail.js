/* eslint-disable import/prefer-default-export */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  }, [params.id]);

  return (
    <div className="flex justify-around gap-5">
      <img className="object-cover w-3/5 rounded-2xl" src={book.image} alt="" />
      <div className="flex flex-col text-right p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.description}</p>

        <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="odd:bg-gray-200 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Finance fee
                </th>
                <td className="px-6 py-4">
                  $ 129
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Option to purchase fee
                </th>
                <td className="px-6 py-4">
                  $ 249
                </td>
              </tr>
              <tr className="odd:bg-gray-200 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Total Amount payable
                </th>
                <td className="px-6 py-4">
                  $ 9,879
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Duration
                </th>
                <td className="px-6 py-4">
                  48 Months
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="my-10 text-xl flex">
          <span className="font-bold">5.9% APR </span>
          Representative
        </p>
        <Link to="/books" className="flex justify-end font-bold mb-3">
          DISCOVER MORE BOOKS
          <i className="bi bi-fast-forward-circle" />
        </Link>
        <div className="flex justify-between text-white font-bold p-5 m-5 rounded-full bg-green-600 hover:bg-green-800">
          <i className="bi bi-gear" />
          <p>Reserve Book</p>
          <i className="bi bi-fast-forward-circle" />
        </div>
      </div>
    </div>
  );
};
