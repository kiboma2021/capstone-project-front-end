import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const listBooks = createAsyncThunk('books/listBooks', async () => {
  const response = await axios.get('http://localhost:4000/books');
  if (!response) {
    return { message: 'There are not books yet' };
  }
  return response.data.map((book) => ({
    id: book.id,
    title: book.title,
    price: book.price,
    image: book.image_url,
    description: book.description,
    rating: book.rating,
    year: book.year,
    author: book.author,
  }));
});

export default listBooks;
