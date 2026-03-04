import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import LikeSlice from "../features/LikeSlice";

// App Store Config / Setup
const AppStore = configureStore({
  reducer: {
    Counter: CounterSlice,
    Likes: LikeSlice,
  },
});

export default AppStore;
