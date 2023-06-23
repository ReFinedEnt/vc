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
        <meta property="og:description" content="Vulture City | About" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_embed_2.png"
        /> */}
      </Head>
      <AboutView />
    </>
  );
};

export default AboutPage;
