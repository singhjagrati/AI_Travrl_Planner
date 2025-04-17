import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Tailwind CSS
import App from './App.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/ui/custom/Header.jsx';

import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ Import this
import Viewtrip from './view-trip/[tripId]/index.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path: '/view-trip/:tripId',
    element: <Viewtrip/>,
  },
]);

// Corrected render call
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>  
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
