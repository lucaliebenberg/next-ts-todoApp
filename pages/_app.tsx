import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
  <>
  <Head>
    <title>My Todo App</title>
    <link rel="icon" href="/favicon.ico" />
   
  </Head>

  <CssBaseline />
  <Component {...pageProps} />
  </>
  ) 
}

export default App;
