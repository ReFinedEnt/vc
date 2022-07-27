import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>krk.finance | IT Wizardzy NFT DAO 🪄 !</title>
        <meta name="description" content="krk.finance | solana web3 basics" />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
