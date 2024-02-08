import { useState } from 'react';
import viteLogo from './assets/loaded.png';
import foxLogo from './assets/logo.svg';
import cloudNine from './assets/CloudNine.svg'
import './VitePrint.css';

export function VitePrint() {
    const [count, setCount] = useState(0);
    return (
        <>
                    <div> Family Hunt #123
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img
                        src={foxLogo}
                        className="logo"
                        alt="Vite logo"
                        style={{ width: '600px', height: '265px' }}
                    />
                </a>
            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img
                        src={cloudNine}
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
            <h1>Vite + React + Prettier + ESLint + SSR</h1>
            <div className="card">
                <button type="button" onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit
                    <code>src/App.tsx </code>
                    and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default VitePrint;
