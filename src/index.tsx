// src/index.tsx
// Import necessary modules from React, ReactDOM, Redux, React Router, and React Query
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store/store';
import './index.css';
import App from './App';

// Create a new QueryClient instance for managing server state
const queryClient = new QueryClient();

// Render the React application to the DOM
ReactDOM.render(
  <React.StrictMode>
     {/* Provide the Redux store to the React application */}
    <Provider store={store}>

       {/* Provide the React Query client to the React application */}
      <QueryClientProvider client={queryClient}>

         {/* Enable React Router for navigation */}
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,

   // Specify the DOM element where the app should be mounted
  document.getElementById('root')
);
