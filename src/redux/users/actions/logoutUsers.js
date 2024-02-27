import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logoutUsers = createAsyncThunk('users/logoutUsers', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete('http://localhost:4000/logout', {
      headers: {
        Authorization: token,
      },
    });
    localStorage.removeItem('token');
    return response.data;
  } catch (error) {
    return { messsage: error };
  }
});

export default logoutUsers;
