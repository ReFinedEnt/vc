import Head from 'next/head';
import AboutView from 'views/about';
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vulture City | About</title>
        <meta property="og:title" content="Vulture City | About" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city/about" />
        <meta property="og:description" content="DAO-operated gold mine & reserve ⛏️✨" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://creator-hub-prod.s3.us-east-2.amazonaws.com/vcg_pfp_1679917136524.png"
        />
      </Head>
      <AboutView />
    </>
  );
};

export default AboutPage;
