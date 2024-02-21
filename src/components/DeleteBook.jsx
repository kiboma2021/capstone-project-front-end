import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import deleteBooks from '../redux/books/actions/deleteBooks';
import listBooks from '../redux/books/actions/listBooks';

export default function DeleteBook() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const books = useSelector((state) => state.books.list);

  const deleteBook = async (id) => {
    await dispatch(deleteBooks({ id }));
    dispatch(listBooks());
  };

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Title"
          type="text"
          name="title"
          onChange={updateSearch}
        />
      </div>
      <ul>
        {books.filter((data) => {
          if (searchInput === '') return true;
          return data.title.includes(searchInput);
        })
          .map((book) => (
            <li key={book.id}>
              <img alt="Book cover" src={book.cover} />
              <p>
                Title:
                {book.title}
              </p>
              <p>
                Price:
                {book.price}
              </p>
              <button type="button" onClick={() => deleteBook(book.id)}>
                <img alt="Delete icon" src="" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
