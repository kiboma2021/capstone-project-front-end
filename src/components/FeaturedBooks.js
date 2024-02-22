/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const FeaturedBooks = () => (
  <div className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="/">
      <img className="rounded-2xl" src={Logo} alt="" />
    </Link>
    <div className="flex flex-col text-center p-5 gap-2">
      <Link to="/">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title</h5>
      </Link>
      <div className="text-3xl text-gray-400">.........................</div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>

      <div className="flex justify-center gap-5">
        <a href="/" aria-label="Facebook">
          <i className="bi bi-facebook" />
        </a>
        <a href="/" aria-label="Twitter">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="/" aria-label="Instagram">
          <i className="bi bi-instagram" />
        </a>
      </div>
    </div>
  </div>
);
