import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createReservations = createAsyncThunk('reservations/createReservations',
  async ({ data, id }) => {
    const body = {
      favourite: {
        user_id: id,
        book_id: data.bookId,
      },
    };
    const response = await axios.post('http://localhost:4000/favourites', body);
    return response.data;
  });

export default createReservations;
