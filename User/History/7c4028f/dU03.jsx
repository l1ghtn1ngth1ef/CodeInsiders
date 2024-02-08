import createRoot from "react-dom/client";
import App from './app';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Saeloun blog" />);