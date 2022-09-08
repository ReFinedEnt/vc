// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
// import { RoadMap } from 'views/roadmap';

import Typed from '../../components/Typed';
import Portfolio from '../../components/Portfolio';

export const HomeView: FC = ({}) => {
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
    <div className="md:hero mx-auto">
      <div className="md:hero-content flex flex-col">
        <Typed />
        <Portfolio />
        {/* <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2">
          <pre data-prefix=">_">
            <code className="">we build stuff</code>
          </pre>
        </div> */}
        {/* <RoadMap /> */}
        {/* <RequestAirdrop />
          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>} */}
      </div>
    </div>
  );
};
