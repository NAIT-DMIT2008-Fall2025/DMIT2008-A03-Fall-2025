import '../styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../utils/theme/config';

function MyApp({ Component, pageProps }) {
  // we're going import the themeProvider
  // we're going to wrap our entire component with
  // that theme provider.
  return <ThemeProvider theme={{}}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
