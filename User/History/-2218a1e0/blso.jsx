import { useState, useEffect, Suspense } from 'react';
import viteLogo from '../loaded.png';
import foxLogo from '../logo.svg'
import './App.css';
import { HydrationProvider, useHydrated } from "react-hydration-provider";
import VitePrint from './test';
import NoSSR from 'react-no-ssr';
import { Server, ClientOnly } from 'vite-ssr'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  function MyApp({ Component, pageProps }) {
    const [showing, setShowing] = useState(false);

    useEffect(() => {
      setShowing(true);
    }, []);

    if (!showing) {
      return null;
    }

    if (typeof window === 'undefined') {
      return <></>;
    } else {
      return (
         <RecoilRoot>
               <VitePrint {...pageProps} />
               <ServerOnly>
                <VitePrint />
                </ServerOnly>
         </RecoilRoot>
      );
    }
  }

export default MyApp;