import '../styles/global.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="efe9e930e66cba53" />
        <script async crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2293003440161756"></script>
        <link
            rel="stylesheet"
            href="https://unpkg.com/prism-themes@1.6.0/themes/prism-vsc-dark-plus.css"
          ></link>
          <title>Тех блог о всяком | BlogGorre</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
