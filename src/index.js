import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="413439472946-tls47ehu42o877ldcnh8l85qj95fadvl.apps.googleusercontent.com">;
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

reportWebVitals();
