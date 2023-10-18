import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
interface User {
  // Define the structure of your user data
  id: string;
  username: string;
  // ... other user data
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Define initial state
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Create a slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set user data in the store
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    // Action to clear user data from the store (on logout or error)
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    // Action to set loading state
    setLoading: (state) => {
      state.loading = true;
    },
    // Action to set error state
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const { setUser, clearUser, setLoading, setError } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
