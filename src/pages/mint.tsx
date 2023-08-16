import Head from 'next/head';
import type { NextPage } from 'next';
import MintView from 'views/mint';
import { useWallet } from '@solana/wallet-adapter-react';
import Wallet from 'components/wallet/wallet.component';

const TokenPage: NextPage = () => {
  const { publicKey } = useWallet();
  return (
    <>
      <Head>
        <title>vulture.city | mint</title>
        <meta property="og:title" content="Vulture City | Mint" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city/mint" />
        <meta property="og:description" content="DAO-operated gold mine & reserve ⛏️✨" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://creator-hub-prod.s3.us-east-2.amazonaws.com/vcg_pfp_1679917136524.png"
        />
      </Head>

      <div className="max-w-[100vw] mx-auto bg-black h-screen flex justify-center items-center">
        {!publicKey ? <Wallet /> : <MintView />}
      </div>
    </>
  );
};

export default TokenPage;
