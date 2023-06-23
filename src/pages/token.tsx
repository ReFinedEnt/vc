import Head from 'next/head';
import TokenView from 'views/token';
import type { NextPage } from 'next';

const TokenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vulture City | Token</title>
        <meta property="og:title" content="Vulture City | Token" />
        <meta property="og:site_name" content="vulture.city" />
        <meta property="og:url" content="https://vulture.city/token" />
        <meta property="og:description" content="Vulture City | Token" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_embed_2.png"
        /> */}
      </Head>

      <div className="max-w-[100vw] mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
        <TokenView />
      </div>
    </>
  );
};

export default TokenPage;
