import { configureStore } from "@reduxjs/toolkit";

// Import slices
import UserSlice from "../store/slices/userSlice";

// Store Config
const AppStore = configureStore({
  reducer: {
    User: UserSlice,
  },
});

export default AppStore;
