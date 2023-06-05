import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import AuthProvider from './contexts/UserProvider.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)