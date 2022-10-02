import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/header';
import { Introduction } from '../components/introduction';
import { CelestialBodyProvider } from '../contexts/CelestialBodyContext';
import { IntroductionModalProvider } from '../contexts/IntroductionModalContext';
import GlobalStyles from '../styles/global';
import { theme } from '../styles/theme/primary';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>NASAlturas</title>
      </Head>
      <CelestialBodyProvider>
        <IntroductionModalProvider>
          <Introduction />
          <Header />
          <Component {...pageProps} />
        </IntroductionModalProvider>
      </CelestialBodyProvider>
    </ThemeProvider>
  );
}

export default MyApp;
