import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import listBooks from '../redux/books/actions/listBooks';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const books = useSelector((state) => state.books.list);
  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>
          <button type="button" onClick={() => goToDetails(book.id)}>
            <img alt="Book cover" src={book.image} />
          </button>
          <div>
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
    </div>
  );
}
