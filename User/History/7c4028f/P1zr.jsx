import ReactDOM from 'react-dom'
import App from './app'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));  
root.render(<App />);