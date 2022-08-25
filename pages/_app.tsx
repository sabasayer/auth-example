import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '../styles/theme/light-theme';


function MyApp(props: AppProps) {

  const { Component,  pageProps } = props;

  return <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
       
}

export default MyApp
