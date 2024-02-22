import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createBooks = createAsyncThunk('books/createBooks', async (data) => {
  try {
    const formData = new FormData();
    formData.append('book[title]', data.title);
    formData.append('book[price]', data.price);
    formData.append('book[image]', data.image[0], data.image.value);
    formData.append('book[author]', data.author);
    formData.append('book[description]', data.description);
    formData.append('book[year]', data.year);
    formData.append('book[rating]', data.rating);
    formData.append('book[user_id]', data.userId);

    const response = await axios.post('http://localhost:4000/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response)
    return response.data;
  } catch (error) {
    return { error: true, message: error.message };
  }
});

export default createBooks;
