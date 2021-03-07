import { ThemeProvider } from '../contexts/ThemeContext';
import { SettingsProvider } from '../contexts/SettingsContext';

import {  Provider } from 'next-auth/client';

import '../styles/global.css';
import '../styles/theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Provider session={pageProps.session}>
        <SettingsProvider>
          <Component {...pageProps} /> 
        </SettingsProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
