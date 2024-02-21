import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteBooks = createAsyncThunk('books/deleteBooks', async ({ id }) => {
  const response = await axios.delete(`http://localhost:4000/books/${id}`);

  if (!response) return { message: 'Something went wrong' };

  return response.data;
});

export default deleteBooks;
