import './index.css'

import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const clientId="118714632689-adbu7ablrojlhh1mi3j25ripthb4o9gq.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={clientId}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
