import { renderToString } from 'react-dom/server';
import App from '../Components/BaseComponent/App';

export const render = () => {
  console.log("SSRS")
  return renderToString(<App />);
};
