import '../styles/global.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="yandex-verification" content="efe9e930e66cba53" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
