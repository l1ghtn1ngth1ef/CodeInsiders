import { renderToString } from 'react-dom/server';
import App from '../Components/BaseComponent/App';

export const render = () => {
  console.log("SSR Rendered")
  return renderToString(<App />);
};
