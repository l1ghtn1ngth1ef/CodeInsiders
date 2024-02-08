

import { renderToString } from 'react-dom/server';
import App from '../Components/BaseComponent/App';

export const render = () => {
  return renderToString(<App />);
};
