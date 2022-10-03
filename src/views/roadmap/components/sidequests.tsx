// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
// import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const SideQuests: FC = ({}) => {
  //   const wallet = useWallet();
  //   const { connection } = useConnection();

  //   const balance = useUserSOLBalanceStore((s) => s.balance);
  //   const { getUserSOLBalance } = useUserSOLBalanceStore();

  //   useEffect(() => {
  //     if (wallet.publicKey) {
  //       console.log(wallet.publicKey.toBase58());
  //       getUserSOLBalance(wallet.publicKey, connection);
  //     }
  //   }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="card w-42 bg-base-100 shadow-m ">
      <div className="card-body">
        <h2 className="card-title text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Side Quests
        </h2>

        <div className="w-full">
          <ul className="steps steps-vertical">
            <li data-content="🎁" className="step">
              WL + Airdrops
            </li>
            <li data-content="🤖" className="step step-warning">
              Discord Bot
            </li>
            <li data-content="🧁" className="step">
              Cupcakes
            </li>
            <li data-content="🏗️" className="step">
              RPC Node
            </li>
            <li data-content="🧢" className="step">
              Merch
            </li>
            <li data-content="🌱" className="step">
              Hacker House
            </li>
            <li data-content="🧘" className="step">
              Wellbeing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
