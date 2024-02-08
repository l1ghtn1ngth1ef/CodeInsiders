import { useState, useEffect, Suspense } from 'react';
import VitePrint from '../Components/VitePrint/assets/VitePrint';

export default function func() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <><VitePrint /></> : <><VitePrint /></>}</>

};