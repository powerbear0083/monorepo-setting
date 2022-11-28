import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

function EvFmsApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>中華電是電動車管理系統</title>
      </Head>
      <CssBaseline />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default EvFmsApp;
