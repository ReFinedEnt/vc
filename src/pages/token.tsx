import Head from 'next/head';
import TokenView from 'views/token';
import type { NextPage } from 'next';

const TokenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>vulture.city | token</title>
        <meta property="og:title" content="vulture.city | token" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city/token" />
        <meta property="og:description" content="gold exploration & acquisition ⛏️✨" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://creator-hub-prod.s3.us-east-2.amazonaws.com/vcg_pfp_1679917136524.png"
        />
      </Head>

      <div className="max-w-[100vw] mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
        <TokenView />
      </div>
    </>
  );
};

export default TokenPage;
