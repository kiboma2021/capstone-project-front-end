import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const showBook = createAsyncThunk('books/showBook', async ({ id }) => {
  const response = await axios.get(`http://localhost:4000/books/${id}`);
  return response.data;
});

export default showBook;
