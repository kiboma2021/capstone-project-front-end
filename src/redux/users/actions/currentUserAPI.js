import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currentUserAPI = createAsyncThunk('users/currentUser', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:4000/current_user', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return { messsage: error };
  }
});

export default currentUserAPI;
