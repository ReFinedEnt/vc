import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Fed: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>US FED Net Liquidity</title>
        <meta name="description" content="US FED Net Liquidity" />
      </Head>
      <BasicsView />
    </>
  );
};

export default Fed;
