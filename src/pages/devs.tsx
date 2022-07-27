import type { NextPage } from "next";
import Head from "next/head";
// import { BasicsView } from "../views";
import JupiterForm from "../views/JupiterForm/JupiterForm";

const Devs: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>krk.finance | 404 devs</title>
        <meta name="description" content="krk.finance 101 devs" />
      </Head>
      <div className="hero bg-base-0">
        <div className="hero-content text-center">
          <h1 className="tracking-wide font-bold leading-[100%] text-left flex-grow">
            404 DEVS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Devs;
