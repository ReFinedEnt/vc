import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Fed: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>krk.finance | FED</title>
        <meta name="description" content="krk.finance FED" />
      </Head>
      <BasicsView />
    </>
  );
};

export default Fed;
