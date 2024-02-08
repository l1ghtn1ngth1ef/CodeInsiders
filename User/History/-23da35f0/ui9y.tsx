/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
<ClerkProvider publishableKey={PUBLISHABLE_KEY}>

ReactDOM.createRoot(document.getElementById('root')!).render(

    <App />
    </ClerkProvider>

);
