import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Loginslice/LoginSlice";

const store = configureStore({
  reducer: {
    login: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
