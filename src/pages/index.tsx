import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>info.krk.finance</title>
        <meta property="og:title" content="🏗️ chain-agnostic dev guild 👷" />
        <meta property="og:site_name" content="krk.finance" />
        <meta property="og:url" content="https://krk.finance/" />
        <meta property="og:description" content="We learn & buidl stuff." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_embed_2.png"
        />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
