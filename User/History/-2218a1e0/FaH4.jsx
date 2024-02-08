/* Default Application */
/* This is where we render the application */

import { useState, useEffect } from 'react';
import VitePrint from '../VitePrint/VitePrintSSR';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrintCSR /></> : <><VitePrintSSR /></>}</>

};