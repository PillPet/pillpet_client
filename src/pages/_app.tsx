import React from 'react';
import Head from 'next/head';
import {Provider} from "react-redux";
import {AppContext, AppInitialProps, AppProps} from "next/app";
import store from "@store/index";
import {NextComponentType} from "next";
import "@styles/main.scss"

const App : NextComponentType<AppContext, AppInitialProps, AppProps> =({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <title>PillPet Web</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
  
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
