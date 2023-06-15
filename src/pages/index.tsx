import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';

import { getAllPublished } from '../tools/md';
import HomeView from '../views/home';

import type { NextPage } from 'next';

const Home = () => {
  const [loading, setLoading] = useState(true);
  // console.log(posts);
  return (
    <>
      <Head>
        <title>Solana Bro</title>
        <meta property="og:title" content="Solana Bro" />
        <meta property="og:site_name" content="yoursolanabro.io" />
        <meta property="og:url" content="https://yoursolanabro.io/" />
        <meta property="og:description" content="Solana Bro" />
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
