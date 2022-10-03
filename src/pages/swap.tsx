import type { NextPage } from 'next';
import Head from 'next/head';
// import { BasicsView } from "../views";
import JupiterForm from '../views/JupiterForm/JupiterForm';

const Swap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>krk.finance | swap</title>
        <meta name="description" content="krk.finance zero-fee swap" />
      </Head>
      <div className="hero bg-base-0">
        <div className="hero-content text-center flex flex-col justify-center items-center">
          <JupiterForm />
        </div>
      </div>
    </div>
  );
};

export default Swap;
