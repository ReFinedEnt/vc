// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { RoadMap } from "views/roadmap";

const RoadMapPage: FC = ({}) => {
  return (
    <div className="mb-[111px] min-h-screen max-h-screen md:hero mx-auto">
      <div className=" md:hero-content flex flex-col mb-10">
        <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text mb-3 tracking-tight bg-gradient-to-tr from-[#14F195] to-[#9945FF] rgbg">
          Roadmap
        </h1>
        <RoadMap />
        {/* <RequestAirdrop />
          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>} */}
      </div>
    </div>
  );
};

export default RoadMapPage;
