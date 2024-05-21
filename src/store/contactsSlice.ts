// src/store/contactsSlice.ts
// Import the createSlice function from Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Contact interface
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

// Define the initial state of the contacts slice
interface ContactsState {
  contacts: Contact[];
}

// Initialize the initial state for the contacts slice
const initialState: ContactsState = {
  contacts: [],
};

// Create the contacts slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

// Export the actions and reducer
export const { addContact, updateContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
