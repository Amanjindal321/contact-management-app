// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import ChartsMapsPage from './pages/ChartsMapsPage';

const App: React.FC = () => {
  return (
    <div className="flex h-screen ">
      <nav className="w-64 bg-gray-800 text-white ">
        <div className="p-4 text-xl font-bold">Contact Management App</div>
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
