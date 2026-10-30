import { configureStore } from "@reduxjs/toolkit";

//Import slices
import { Reducers } from "./slices/user";

// App Store
const AppStore = configureStore({
  reducer: {
    Users: Reducers,
  },
  devTools: true,
});

export default AppStore;
