import Head from 'next/head';
import WhoDaBestView from 'views/whodabest';
import type { NextPage } from 'next';
import Table from 'components/table/table.component';
import { useWallet } from '@solana/wallet-adapter-react';
import Wallet from 'components/wallet/wallet.component';

const WhoDaBest: NextPage = () => {
  const { publicKey } = useWallet();
  return (
    <>
      <Head>
        <title>Solana Bro | WhoDaBest</title>
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
      {!publicKey ? (
        <div className="max-w-[100vw] hero mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
          <Wallet />
        </div>
      ) : (
        <WhoDaBestView />
      )}
    </>
  );
};

export default WhoDaBest;
