import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import vc from '../../assets/img/vc.jpeg';
import twitterIcon from '../../assets/img/twitter.svg';

import type { NextRouter } from 'next/router';

type Props = {
  router: NextRouter;
};

export const NavBar: FC<Props> = ({ router }) => (
  <div className="navbar flex flex-row md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white absolute top-0 h-[67.5px]">
    <div className="navbar-start flex z-[999]">
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

    <div className="hidden md:inline md:navbar-center z-[999]">
      <div className="flex items-stretch z-[999] lowercase">
        <Link href={`${router.pathname !== '/' ? '/' : ''}`}>
          <span className="btn btn-sm btn-ghost rounded-btn lowercase">home</span>
        </Link>

        {/* <Link href={`/token`}>
          <span className="btn btn-sm btn-ghost rounded-btn lowercase">token</span>
        </Link> */}
        <Link href={`/mint`}>
          <span className="btn btn-sm btn-ghost rounded-btn lowercase">mint</span>
        </Link>
        <Link href={`/about`}>
          <span className="btn btn-sm btn-ghost rounded-btn lowercase">about</span>
        </Link>
        <Link href={`https://docsend.com/view/fiwmip73cyb5j6y7`}>
          <span className="btn btn-sm btn-ghost rounded-btn lowercase">whitepaper</span>
        </Link>
      </div>
    </div>

    <div className="navbar-end">
      <div className="flex  justify-end">
        <span className="mr-5 mt-1 cursor-pointer">
          <Link href="https://twitter.com/Vulture_City" target={'_blank'} rel="noreferrer">
            <Image src={twitterIcon} priority alt="follow us on twitter!" />
          </Link>
        </span>
        <span className="border-r border-primary"></span>
      </div>
      <WalletMultiButton className="btn mx-2 ml-10 mr-2" />
    </div>
  </div>
);
