// src/App.tsx
// Import necessary modules from React and react-router-dom
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import the pages that will be rendered for different routes
import ContactsPage from './pages/ContactsPage';
import ChartsMapsPage from './pages/ChartsMapsPage';

// Define the main App component
const App: React.FC = () => {
  return (
    // Set up a flex container to take the full height of the screen
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-800 text-white ">
        <div className="p-4 text-xl font-bold">Contact Management App</div>

         {/* Navigation links */}
        <ul>
          <li>
            <Link to="/" className="block p-4 hover:bg-gray-700">Contacts</Link>
          </li>
          <li>
            <Link to="/charts-maps" className="block p-4 hover:bg-gray-700">Charts and Maps</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/charts-maps" element={<ChartsMapsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
