import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
// import "";

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:pb-2 shadow-lg bg-black text-neutral-content z-50 border-b-2 border-white">
        <div className="navbar-start flex z-[999]">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost ml-10 z-[999]"
          >
            <div className="flex content-center title-glitch" data-content=">_">
              {/* <Image
                    src={
                      'https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/coin_logo.png'
                    }
                    height={'40px'}
                    width={'40px'}
                  /> */}
              &gt;_
            </div>
          </label>

          {/* <div className="hidden sm:inline w-22 h-22 md:p-2">
            <div className="flex content-center">
              <Link href="/">
                <button className="btn btn-square btn-ghost ml-2 mx-1">
                  <Image
                    src={
                      'https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/coin_logo.png'
                    }
                    height={'40px'}
                    width={'40px'}
                  />
                  &gt;_
                </button>
              </Link>
            </div>
          </div> */}
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center z-[999]">
          <div className="flex items-stretch z-[999]">
            <Link href="/">
              <button
                className="btn btn-sm btn-ghost rounded-btn text-glitch"
                data-content="HOME"
              >
                {/* <Image
                    src={
                      'https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/coin_logo.png'
                    }
                    height={'40px'}
                    width={'40px'}
                  /> */}
                HOME
              </button>
            </Link>
            <Link href="/roadmap">
              <button
                className="btn btn-sm btn-ghost rounded-btn text-glitch"
                data-content="ROADMAP"
              >
                ROADMAP
              </button>
            </Link>
            <Link
              href="https://usdkrk.gitbook.io/krk./krk./"
              target={"_blank"}
              rel="noreferrer"
            >
              <button
                className="btn btn-sm btn-ghost rounded-btn text-glitch"
                data-content="Whitepaper"
              >
                Whitepaper
              </button>
            </Link>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          {/* <div className="dropdown">
            <div tabIndex={0} className="btn btn-square text-right">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div> */}
          {/* <div className="badge badge-sm badge-success px-3 z-[999]">pre-alpha</div> */}
          <Link href="/wl">
            <button
              className="btn btn-sm btn-ghost rounded-btn text-glitch"
              data-content="Get WL."
            >
              Get WL.
            </button>
          </Link>
          <button className="btn btn-sm btn-success mr-10 mx-5 px-5 z-[999]">
            Sign-In
          </button>
          {/* <WalletMultiButton className="btn mx-2 z-[999]" /> */}
        </div>
      </div>
      {props.children}
    </div>
  );
};
