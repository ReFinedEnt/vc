// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Carousel from "components/Carousel";
import Portfolio from "components/Portfolio";
import Spinner from "components/Spinner";

// Wallet
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
// import { RequestAirdrop } from '../../components/RequestAirdrop';
// import pkg from '../../../package.json';

// Store
// import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
// import { RoadMap } from 'views/roadmap';

import Typed from "components/Typed";
// import { QuestView } from "./quest";
// import { AlchemyView } from "./alchemy";

export const HomeView: FC = ({}) => {
  // const wallet = useWallet();
  // const { connection } = useConnection();

  // const balance = useUserSOLBalanceStore((s) => s.balance);
  // const { getUserSOLBalance } = useUserSOLBalanceStore();

  // useEffect(() => {
  //   if (wallet.publicKey) {
  //     console.log(wallet.publicKey.toBase58());
  //     getUserSOLBalance(wallet.publicKey, connection);
  //   }
  // }, [wallet.publicKey, connection, getUserSOLBalance]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="xs:max-w-[100vw] md:hero mx-auto bg-black">
      <div className="w-full h-screen absolute top-0 bg-[rgba(0,0,0,0.1)] z-3"></div>

      <div className="md:hero-content hero-content flex flex-col">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Typed />
            <Portfolio />
            <Carousel />
          </>
        )}

        {/* <QuestView />
        <AlchemyView /> */}
      </div>
    </div>
  );
};
