import { createSlice } from '@reduxjs/toolkit';
import createBooks from './actions/createBooks';
import listBooks from './actions/listBooks';
import deleteBooks from './actions/deleteBooks';

const initialState = {
  book: null,
  status: '',
  list: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooks.fulfilled, (state, action) => {
        state.book = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(listBooks.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.list = action.payload;
      })
      .addCase(deleteBooks.fulfilled, (state, action) => {
        state.status = action.payload.message;
      });
  },
});

export default booksSlice.reducer;
