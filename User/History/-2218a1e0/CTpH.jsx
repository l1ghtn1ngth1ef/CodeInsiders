/* Default Application */
/* This is where we render the application */

import { useState, useEffect } from 'react';
import VitePrint from '../VitePrint/VitePrint';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrint /></> : <><VitePrint />console.log("")</>}</>

};