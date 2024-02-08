/* Default Application */
/* This is where we render the application */

import { useState, useEffect } from 'react';
import VitePrintSSR from '../VitePrint/VitePrintSSR';
CSR';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrintCSR /></> : <><VitePrintSSR /></>}</>

};