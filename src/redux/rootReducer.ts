// ./rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
