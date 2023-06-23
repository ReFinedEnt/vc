import Head from 'next/head';
import HomeView from '../views/home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vulture City | Home</title>
        <meta property="og:title" content="Vulture City | Home" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city" />
        <meta property="og:description" content="Vulture City | Home" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_embed_2.png"
        /> */}
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
