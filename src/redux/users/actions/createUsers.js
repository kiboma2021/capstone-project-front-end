import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createUsers = createAsyncThunk('users/createUsers', async (data) => {
  try {
    const body = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
      },
    };

    const response = await axios.post('http://localhost:4000/signup', body);
    return response.data;
  } catch (error) {
    return { messsage: error };
  }
});

export default createUsers;
