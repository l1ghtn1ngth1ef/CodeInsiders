import { hydrate } from 'react-dom/client';

import App from './app';

hydrate(document.getElementById('app'), <App />);