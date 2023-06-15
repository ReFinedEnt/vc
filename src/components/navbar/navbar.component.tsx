import { FC } from 'react';
import Link from 'next/link';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const NavBar: FC = (props) => {
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white absolute top-0 h-[67.5px]">
        <div className="navbar-start flex z-[999]">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost ml-10 z-[999]">
            <div className="flex content-center title-glitch" data-content=">_">
              &gt;_
            </div>
          </label>
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
