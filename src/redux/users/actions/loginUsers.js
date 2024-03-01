import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUsers = createAsyncThunk('users/loginUsers', async (data) => {
  try {
    const body = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    };

    const response = await axios.post('http://localhost:4000/login', body);
    localStorage.setItem('token', response.headers.authorization);
    return response.data;
  } catch (error) {
    return { messsage: error };
  }
});

export default loginUsers;
