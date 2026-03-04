import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  data: {
    fullName: "",
    email: "",
    password: "",
  },
};

// Create Reducers with Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUserAccount: (state, action) => {
      console.log("Store Received : ", action.payload);
      state.data = action.payload;
    },
  },
});

// Export actions
export const { createUserAccount } = userSlice.actions;

// Export Reducer
export default userSlice.reducer;
