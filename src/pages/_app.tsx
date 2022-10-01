import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/header';
import { CelestialBodyProvider } from '../contexts/CelestialBodyContext';
import GlobalStyles from '../styles/global';
import { theme } from '../styles/theme/primary';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CelestialBodyProvider>
        <Header />
        <Component {...pageProps} />
      </CelestialBodyProvider>
    </ThemeProvider>
  );
}

export default MyApp;
