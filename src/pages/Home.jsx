import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import listBooks from '../redux/books/actions/listBooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const books = useSelector((state) => state.books.list);

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: books.length >= 3 ? 3 : 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="content carousel">
      <ul>
        {books.length > 0
          ? (
            <>
              <div className="titles">
                <h1>LIST OF BOOKS</h1>
                <h2>Please select a book</h2>
                <p>..............................................</p>
              </div>
              <div className="carousel-and-buttons">
                <button type="button" onClick={sliderRef?.slickPrev} className="carousel-btn left">{'<'}</button>
                <div className="carousel-inner">
                  <Slider {...settings} ref={setSliderRef}>
                    {books.map((book) => (
                      <li className="carousel-content" key={book.id}>
                        <button type="button" onClick={() => goToDetails(book.id)} className="img-carousel">
                          <img alt="Book cover" src={book.image} className="image" />
                        </button>
                        <div className="carousel-text">
                          <p>
                            Title:
                            {book.title}
                          </p>
                          <p>
                            Price:
                            {book.price}
                          </p>
                        </div>
                      </li>
                    ))}

                  </Slider>
                </div>
                <button type="button" onClick={sliderRef?.slickNext} className="carousel-btn right">{'>'}</button>
              </div>
            </>
          )
          : <div>There are not books yet</div>}
      </ul>
    </div>
  );
}
