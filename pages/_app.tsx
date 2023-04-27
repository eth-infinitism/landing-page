import Layout from '@components/layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '@configs/next-seo.config.js';
import Script from 'next/script';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <DefaultSeo {...SEO} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WTWPTZJ1WZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WTWPTZJ1WZ');
        `}
      </Script>
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
