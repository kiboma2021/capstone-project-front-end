import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currentUserAPI = createAsyncThunk('users/currentUser', async () => {
  const token = localStorage.getItem('token');
  if (!token) return {};

  const response = await axios.get('http://localhost:4000/current_user', {
    headers: {
      Authorization: token,
    },
  });
  console.log(response);
  return response.data;
});

export default currentUserAPI;
