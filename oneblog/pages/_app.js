import '../styles/globals.css';

import Layout from '../components/layout/Layout';

// import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <title>Oneblog - The best place for your web</title>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
