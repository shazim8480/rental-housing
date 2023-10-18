import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    root: rootReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
