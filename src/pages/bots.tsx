import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Bots: NextPage = (props) => {
  return (
    <div className="w-full bg-base-300 rounded-xl border-2 border-white flex flex-col justify-center items-center mb-2">
      <h1 className="pt-2 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] w-100">
        Bots we do.
      </h1>
      <p className="pb-2 text-sm text-white z-[999] bg-base-300 p-1 rounded">
        Self-curated list of bots and micro-services tailored to our costumer
        needs :
      </p>
    </div>
  );
};

export default Bots;
