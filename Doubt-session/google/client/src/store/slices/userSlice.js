import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  data: {
    ID: "",
    Username: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    CreatedAt: "",
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
