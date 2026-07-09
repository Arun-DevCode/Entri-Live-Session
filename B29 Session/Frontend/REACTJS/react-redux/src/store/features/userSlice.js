import { createSlice } from "@reduxjs/toolkit";

const UserData = {
  name: "",
  email: "",
  bio: "",
};

const UserSlice = createSlice({
  name: "users",
  initialState: UserData,
  reducers: {
    createAccount: (state, action) => {
      // state.email = action.payload.email;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
      state.name = action.payload.name;
    },
    updateKycDetails: () => {},
  },
});

// Actions
const { createAccount, updateKycDetails } = UserSlice.actions;
export { createAccount, updateKycDetails };

// Reducer
const UserReducer = UserSlice.reducer;
export default UserReducer;
