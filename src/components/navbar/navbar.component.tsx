import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import twitterIcon from '../../assets/img/twitter.svg';
import type { NextRouter } from 'next/router';

type Props = {
  router: NextRouter;
};

export const NavBar: FC<Props> = ({ router }) => {
  const { publicKey } = useWallet();

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white absolute top-0 h-[67.5px]">
        <div className="navbar-start flex z-[999]">
          <h1 className="ml-8 leading-normal text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Your Solana Bro
          </h1>
          {/* <span className="border-r border-primary"></span> */}

          <span className="ml-5 mt-1 cursor-pointer">
            <Link href="https://twitter.com/yoursolanabro" target={'_blank'} rel="noreferrer">
              <Image src={twitterIcon} priority alt="follow us on twitter" className="" />
            </Link>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center z-[999]">
          <div className="flex items-stretch z-[999]">
            {/* <Link href={`${router.pathname !== '/' ? '/' : ''}`}> */}
            <Link href={`${router.pathname !== '/' ? '/' : ''}`}>
              <button className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">
                HOME
              </button>
            </Link>
            {/* <Link href={`${router.pathname !== '/' ? '/leaderboard' : ''}`}> */}
            <Link href={`/leaderboard`}>
              <button className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">
                leaderboard
              </button>
            </Link>
            <Link href={`/whodabest`}>
              <button className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">
                whodabest
              </button>
            </Link>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">{publicKey && <WalletMultiButton className="btn mx-2" />}</div>
      </div>
      {/* {props.children} */}
    </div>
  );
};
