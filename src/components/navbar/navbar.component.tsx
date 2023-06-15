import { FC } from 'react';
import Link from 'next/link';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const NavBar: FC = (props) => {
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white absolute top-0 h-[67.5px]">
        <div className="navbar-start flex z-[999]">
          <h1 className="ml-8 leading-normal text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Solana Bro
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center z-[999]">
          <div className="flex items-stretch z-[999]"></div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <WalletMultiButton className="btn mx-2" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
