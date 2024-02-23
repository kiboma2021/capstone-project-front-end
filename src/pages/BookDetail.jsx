import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import showBook from '../redux/books/actions/showBook';

export default function BookDetail() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBook({ id }));
  }, [dispatch]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <img alt="Book cover" src={book.image_url} />
      <p>{book.id}</p>
      <p>{book.title}</p>
      <p>{book.price}</p>
    </div>
  );
}
