import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import listBooks from '../redux/books/actions/listBooks';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.list);

  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>
          <div>
            <img alt="Book cover" src={book.image} />
          </div>
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
