import { useState, useEffect, Suspense } from 'react';
import viteLogo from '../loaded.png';
import foxLogo from '../logo.svg'
import './App.css';
import { HydrationProvider, useHydrated } from "react-hydration-provider";
import VitePrint from './test';
import NoSSR from 'react-no-ssr';

export default function func() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

     return <>{domLoaded ? <><VitePrint /></> : <><VitePrint /></>}</>

};