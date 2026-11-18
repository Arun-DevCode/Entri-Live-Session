import { configureStore } from "@reduxjs/toolkit";

// Import Reducer
import UserReducer from "./actions/user.slice";

// Store Config
const AppStore = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export default AppStore;
