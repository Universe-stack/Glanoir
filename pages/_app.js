import React,{useState} from 'react'
import '../styles/globals.css'

import Layout from '../Components/Layout'

import { StateContext } from '../context/stateContext'
import {Toaster} from 'react-hot-toast';

import Router from 'next/router';
import Head from 'next/head'

import Loader from '../Components/UI/Loader';

import Nprogress from "nprogress";



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart',(url)=>{
    Nprogress.start();
    setLoading(true);
    console.log("loading ...")
  })

  Router.events.on('routeChangeComplete',(url)=>{
    Nprogress.done();
    setLoading(false);
    console.log("loading end...")
  })
  return(
   <>
      <Head>
      <link rel="st`ylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      {loading && <Loader/>}

      <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
      
    </StateContext>
   </>
    
  )
}

export default MyApp
