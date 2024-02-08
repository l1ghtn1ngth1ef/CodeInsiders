import * as ReactDOM from 'react-dom/server';

import App from './app';

export const render = () => {
  return render(<App />);
};