import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import showBook from '../redux/books/actions/showBook';

export default function BookDetail() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.book);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(showBook({ id }));
  }, [dispatch, id]);

  const goToReservations = () => {
    navigate('/reserve-book');
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="content details">
      <img alt="Book cover" src={book.image_url} className="image-details" />
      <div className="details-container">
        <h1>BOOK DETAILS</h1>
        <div className="details-book">
          <div>
            <div>Id:</div>
            <div>{book.id}</div>
          </div>
          <div>
            <div>Title:</div>
            <div>{book.title}</div>
          </div>
          <div>
            <div>Price:</div>
            <div>{book.price}</div>
          </div>
          <div>
            <div>Description:</div>
            <div>{book.description}</div>
          </div>
          <div>
            <div>Rating:</div>
            <div>
              {book.rating}
              /5
            </div>
          </div>
          <div>
            <div>Year:</div>
            <div>{book.year}</div>
          </div>
          <div>
            <div>Author:</div>
            <div>{book.author}</div>
          </div>
          <button className="btn details-btn" type="button" onClick={goToReservations}>RESERVE</button>
        </div>
      </div>
    </div>
  );
}
