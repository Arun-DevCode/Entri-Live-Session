import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  count: 0,
  like: 0,
  order: 0,
};

// Slice Config
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = action.payload;
    },
    decrement: (state, action) => {
      if (state.count > 0) {
        console.log("Are you sure?");
        state.count--;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Actions Export
const { increment, decrement, reset } = CounterSlice.actions;
export { increment, decrement, reset };

// Reducer
export default CounterSlice.reducer;
