import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  id: 0,
  username: 0,
  likedCount: 0,
};

// Slice Config
const LikeSlice = createSlice({
  name: "Likes",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.likedCount = action.payload;
    },
  },
});

// Actions Export
const { increment } = LikeSlice.actions;
export { increment };

// Reducer
export default LikeSlice.reducer;
