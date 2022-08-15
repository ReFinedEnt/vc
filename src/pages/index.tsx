import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeView } from '../views';

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>krk.finance | IT Wizardzy NFT DAO 🪄 !</title>
        <meta
          name="description"
          content="krk.finance | IT Wizardzy NFT DAO 🪄 !"
        />
      </Head>
      <div>
        <HomeView />
      </div>
    </>
  );
};

export default Home;
