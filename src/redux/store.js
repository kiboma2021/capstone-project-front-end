import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
  },
});

export default store;
