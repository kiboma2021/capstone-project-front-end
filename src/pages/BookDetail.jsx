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
    <div className="content private">
      <img alt="Book cover" src={book.image_url} />
      <p>{book.id}</p>
      <p>{book.title}</p>
      <p>{book.price}</p>
      <button className="btn" type="button" onClick={goToReservations}>RESERVE</button>
    </div>
  );
}
