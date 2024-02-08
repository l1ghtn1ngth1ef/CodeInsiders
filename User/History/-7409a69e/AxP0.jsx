/* This is the Default Server Side Rendering Component */

import { renderToString } from 'react-dom/server';
import App from '../Components/BaseComponent/App';

export const render = () => {
  return renderToString(<App />);
};
