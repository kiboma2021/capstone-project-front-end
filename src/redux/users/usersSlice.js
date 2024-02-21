import { createSlice } from '@reduxjs/toolkit';
import createUsers from './actions/createUsers';
import loginUsers from './actions/loginUsers';
import logoutUsers from './actions/logoutUsers';

const initialState = {
  user: null,
  status: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUsers.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.user = action.payload.data;
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.user = action.payload.data;
      })
      .addCase(logoutUsers.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.user = action.payload.data;
      });
  },
});

export default usersSlice.reducer;
