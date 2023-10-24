"use client";
// import rootReducer from "./rootReducer";
import userReducer from "./feature/users/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
