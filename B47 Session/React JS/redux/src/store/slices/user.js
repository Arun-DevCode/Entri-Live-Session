import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  name: null,
  email: null,
  password: null,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.email = action.payload.Email
      state.name = action.payload.Username
      state.password = action.payload.Password
    },
  },
});

// Actions : Reducer functions
export const userActions = UserSlice.actions;

// Reducer
export const Reducers = UserSlice.reducer;
