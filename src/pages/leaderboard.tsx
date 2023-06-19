import Head from 'next/head';

import HomeView from '../views/home';

import { useWallet } from '@solana/wallet-adapter-react';
import Wallet from '../components/wallet/wallet.component';

import type { NextPage } from 'next';
import LeaderBoardView from 'views/leaderboard';

const LeaderBoard: NextPage = () => {
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

      <div className="max-w-[100vw] mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
        <LeaderBoardView />
      </div>
    </>
  );
};

export default LeaderBoard;