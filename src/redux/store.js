import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import booksReducer from './books/booksSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
    reservations: reservationsReducer,
  },
});

export default store;
