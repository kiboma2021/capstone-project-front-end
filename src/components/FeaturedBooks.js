/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FeaturedBooks = ({ data }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentGroupIndex((prevIndex) => (
      prevIndex === 0 ? Math.ceil(data.length / 3) - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentGroupIndex((prevIndex) => (
      prevIndex === Math.ceil(data.length / 3) - 1 ? 0 : prevIndex + 1));
  };

  const renderGroup = (groupIndex) => {
    const startIndex = groupIndex * 3;
    const endIndex = Math.min(startIndex + 3, data.length);
    return data.slice(startIndex, endIndex).map((book) => (
      <div key={book.id} className="w-1/3 px-1">
        <Link to="/">
          <img src={book.image} className="w-full h-64 object-cover rounded-xl" alt="Book" />
        </Link>
        <div className="flex flex-col text-center p-5 gap-2">
          <Link to="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
          </Link>
          <div className="text-3xl text-gray-400">.........................</div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.description}</p>

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
    ));
  };

  return (
    <div>
      <div className="flex flex-col gap-5 text-center mb-5">
        <p className="text-2xl font-bold">FEATURED BOOKS</p>
        <p className="text-gray-400">Please select a book for more details</p>
        <div className="text-3xl text-gray-400">.........................</div>
      </div>

      <div id="default-carousel" className="relative w-full overflow-hidden" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="flex flex-wrap">
          {renderGroup(currentGroupIndex)}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-green-600 text-5xl p-3 rounded-r-full"
          onClick={handlePrevSlide}
          aria-label="Previous"
        >
          <i className="bi bi-skip-backward text-white" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-green-600 text-5xl p-3 rounded-l-full"
          onClick={handleNextSlide}
          aria-label="Next"
        >
          <i className="bi bi-skip-forward text-white" />
        </button>
      </div>
    </div>
  );
};
