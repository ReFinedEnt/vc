import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>krk.finance | IT Wizardzy NFT DAO 🪄 !</title>
        <meta
          name="description"
          content="krk.finance | IT Wizardzy NFT DAO 🪄 !"
        />
      </Head>

      <HomeView />
    </div>
  );
};

export default Home;
