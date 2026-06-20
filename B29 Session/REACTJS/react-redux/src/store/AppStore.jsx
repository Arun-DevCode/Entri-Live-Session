import { configureStore } from "@reduxjs/toolkit";

// Import Reducer By Slice
import UserReducer from "./features/userSlice";

//* Store Config
const AppStore = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export default AppStore;
