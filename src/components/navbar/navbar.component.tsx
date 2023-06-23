import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import twitterIcon from '../../assets/img/twitter.svg';
import vc from '../../assets/img/vc.jpeg';
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
          {/* <span className="border-r border-primary"></span> */}

          <Link href="/">
            <div className="flex items-center ml-4 cursor-pointer">
              <Image
                src={vc}
                priority
                alt="follow us on twitter"
                className="rounded-full"
                width={42}
                height={42}
              />
              <h1 className="ml-8 leading-normal text-md font-bold">vulture city</h1>
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center z-[999]">
          <div className="flex items-stretch z-[999]">
            {/* <Link href={`${router.pathname !== '/' ? '/' : ''}`}> */}
            <Link href={`${router.pathname !== '/' ? '/' : ''}`}>
              <span className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">HOME</span>
            </Link>
            {/* <Link href={`${router.pathname !== '/' ? '/leaderboard' : ''}`}> */}
            <Link href={`/token`}>
              <span className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">token</span>
            </Link>
            <Link href={`/mint`}>
              <span className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">mint</span>
            </Link>
            <Link href={`/about`}>
              <span className="btn btn-sm btn-ghost rounded-btn text-glitch lowercase">about</span>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <WalletMultiButton className="btn mx-2" />
        </div>
      </div>
      {/* {props.children} */}
    </div>
  );
};
