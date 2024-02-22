import { createSlice } from '@reduxjs/toolkit';
import createUsers from './actions/createUsers';
import loginUsers from './actions/loginUsers';
import logoutUsers from './actions/logoutUsers';
import currentUserAPI from './actions/currentUserAPI';

const initialState = {
  user: null,
  status: '',
  currentUser: null,
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
      })
      .addCase(currentUserAPI.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  },
});

export default usersSlice.reducer;
