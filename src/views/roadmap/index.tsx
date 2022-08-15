// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';
import { SideQuests } from './components/sidequests';
import { Legend } from './components/legend';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const RoadMap: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="flex justify-center items-center flex-col w-screen">
      <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] solana">
        Roadmap
      </h2>
      <div className="w-screen flex justify-center align-center">
        <div className="absolute left-10 sm:hidden md:hidden lg:block">
          <SideQuests />
        </div>
        <div className="absolute right-10">
          <Legend />
        </div>
        <ul className="steps steps-vertical">
          <li
            data-content="📑"
            className="step step-success"
            id="step-whitepaper"
          >
            Whitepaper
          </li>
          <li data-content="🌐" className="step step-success" id="step-DEX">
            DEX
          </li>
          <li data-content="🔁" className="step step-warning" id="step-swap">
            Swap
          </li>

          <li
            data-content="★"
            className="step step-secondary"
            id="step-secondary"
          >
            NFT Governance
          </li>
          <li data-content="🎁" className="step" id="step-token">
            $KRK Token
          </li>
          <li data-content="💱" className="step" id="step-token">
            Serum Markets
          </li>
          <li data-content="" className="step" id="step-lend">
            Lending
          </li>
          {/* <li data-content="🌐" className="step step-warning" id="step-DEX">
            AMM
          </li> */}
          {/* <li data-content="🏦" className="step" id="step-staking">
            Governance
          </li> */}
          <li data-content="★" className="step" id="step-lambo">
            Lambo
          </li>
          <li data-content="🏆" className="step" id="step-lambo">
            <Link href="https://thenetworkstate.com/">Network State</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
