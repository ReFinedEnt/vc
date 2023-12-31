import Head from 'next/head';
import HomeView from '../views/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>vulture.city | home</title>
        <meta property="og:title" content="vulture.city | home" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city" />
        <meta property="og:description" content="gold exploration & acquisition ⛏️✨" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://creator-hub-prod.s3.us-east-2.amazonaws.com/vcg_pfp_1679917136524.png"
        />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
