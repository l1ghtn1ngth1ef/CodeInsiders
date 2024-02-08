/* Default Application */
/* This is where we render the application */

import { useState, useEffect } from 'react';
import VitePrintCSR from '../VitePrint/VitePrintCSR';


export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrintCSR /></> : <><VitePrintSSR /></>}</>

};