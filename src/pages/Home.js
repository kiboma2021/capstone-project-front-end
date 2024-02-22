/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import useFetch from '../hooks/useFetch';
import { BookCard } from '../components';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);

  return (
    <div>
      <div>
        <div className="flex flex-col gap-5 text-center mb-5">
          <p className="text-2xl font-bold">FEATURED BOOKS</p>
          <p className="text-gray-400">Please select a book for more details</p>
          <div className="text-3xl text-gray-400">.........................</div>
        </div>

        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          {/* Carousel wrapper */}
          {data && data.map((book, index) => (
            <div key={book.id} className={index === 0 ? 'duration-700 ease-in-out' : 'duration-700 ease-in-out hidden'} data-carousel-item={index === 0 ? 'active' : null}>
              <img src={book.image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          ))}
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {data && data.map((book, index) => (
              <button key={book.id} type="button" className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index} />
            ))}
          </div>
          {/* Slider controls */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

      </div>
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
    </div>
  );
};
