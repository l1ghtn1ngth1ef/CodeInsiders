import { hydrateRoot } from 'react-dom/client';
'use client'
import App from './app';

hydrateRoot(document.getElementById('app'), <App />);