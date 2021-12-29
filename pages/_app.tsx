import '../styles/global.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="yandex-verification" content="efe9e930e66cba53" />
      <script async  crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2293003440161756"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
