import Head from 'next/head';
import WhoDaBestView from 'views/whodabest';
import type { NextPage } from 'next';
import Table from 'components/table/table.component';

const WhoDaBest: NextPage = () => {
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
      <WhoDaBestView />
    </>
  );
};

export default WhoDaBest;
