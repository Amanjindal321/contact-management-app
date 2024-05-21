// src/store/store.ts
// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the contacts reducer
import contactsReducer from './contactsSlice';

// Configure the Redux store
const store = configureStore({
  // Define the reducers for the store
  reducer: {
    contacts: contactsReducer,
  },
});

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
