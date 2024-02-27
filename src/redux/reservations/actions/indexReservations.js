import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const listOfReservations = createAsyncThunk('reservations/listOfReservations', async (id) => {
  const response = await axios.get(`http://localhost:4000/favourites?id=${id}`);
  const reservations = response.data.map((reservation) => {
    const { book } = reservation;
    return {
      key: reservation.id,
      id: book.id,
      title: book.title,
      image: book.image_url,
      year: book.year,
    };
  });

  return reservations;
});

export default listOfReservations;
