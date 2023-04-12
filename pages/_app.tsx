import Layout from '@components/layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '@configs/next-seo.config.js';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <DefaultSeo {...SEO} />
      <Head>
        <title>ERC 4337</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
