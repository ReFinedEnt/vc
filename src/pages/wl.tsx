import { NextPage } from "next";
import Head from "next/head";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WL: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>krk.finance | Apply.</title>
        <meta name="description" content="krk.finance sign-up" />
      </Head>
      <div className="w-full justify-center items-center sign-up bg-black">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text my-5 tracking-tight bg-gradient-to-tr from-[#14F195] to-[#9945FF] rgbg">
            Get WL.
          </h1>
          <div className="artboard phone-1 border-2 border-white rounded-3xl flex flex-col justify-center items-center">
            <WalletMultiButton className="btn mx-2 z-[999]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WL;
