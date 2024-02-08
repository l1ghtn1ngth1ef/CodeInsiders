import { useState, useEffect, Suspense } from 'react';
import VitePrint from '../Components/VitePrint/VitePrint';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrint /></> : <><VitePrint /></>}</>

};