import { useState } from 'react';
import viteLogo from '../loaded.png';
import './App.css';
/* eslint-disable */
function App() {
  const [count, setCount] = useState(0);
  console.log('hi mom!');
  return ( 
    <>   
      <div>             
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img     
            src="./logo.svg"    
            className="logo"  
            alt="Vite logo"
            style={{ width: '600px', height: '265px' }} 
          />
        </a> 
      </div>  
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            style={{ width: '600px', height: '170px' }}
          />
        </a>
      </div>
      <h1>Vite + React + Prettier + ESLint</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
