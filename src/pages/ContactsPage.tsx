// src/pages/ContactsPage.tsx
// Import necessary modules from React and Redux
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addContact, updateContact, deleteContact } from '../store/contactsSlice';

// Define the ContactsPage component
const ContactsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  // Get the contacts from the Redux store
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Define the handleSubmit functions
  const handleSubmit = () => {
    if (editId) {
      dispatch(updateContact({ id: editId, name, email, phone }));
      setEditId(null);
    } else {
      dispatch(addContact({ id: new Date().toISOString(), name, email, phone }));
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  // Define the handleEdit function
  const handleEdit = (id: string) => {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setEditId(id);
    }
  };

  // Define the handleDelete function
  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  // Render the contacts page
  return (
    <div>
      <h2 className="text-2xl mb-4">Contacts</h2>
      <div>
        {/* Add contact form */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 mr-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 mr-2"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <ul className="mt-4">
        {/* Render the list of contacts */}
        {contacts.map(contact => (
          <li key={contact.id} className="border-b p-2 flex justify-between">
            <div>
              {contact.name} - {contact.email} - {contact.phone}
            </div>
            <div>
              {/* Add edit and delete buttons */}
              <button onClick={() => handleEdit(contact.id)} className="bg-yellow-500 text-white p-1 mr-2">
                Edit
              </button>
              <button onClick={() => handleDelete(contact.id)} className="bg-red-500 text-white p-1">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
