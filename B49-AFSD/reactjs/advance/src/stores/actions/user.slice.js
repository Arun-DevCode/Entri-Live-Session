import { createSlice } from "@reduxjs/toolkit";

// State
const initialState = { name: "Ajith Kumar", email: "", password: "" };

// Slice Config
const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    credential: (state, action) => {
      console.log("Triggered!");
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Reducer
const UserReducer = UserSlice.reducer;
export default UserReducer;

// Actions
export const actions = UserSlice.actions;
