import { NextPage } from "next";
import Head from "next/head";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const LogIn: NextPage = (props) => {
  return (
    <>
      {/* <Head></Head> */}
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text mb-3 tracking-tight bg-gradient-to-tr from-[#14F195] to-[#9945FF] rgbg">
          Log-In
        </h1>
        <div className="artboard phone-1 border-2 border-white rounded-3xl flex flex-col justify-center items-center">
          <WalletMultiButton className="btn mx-2 z-[999]" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
