import ReactDOM from "react-dom";
import App from 'App';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Dalos blog" />);