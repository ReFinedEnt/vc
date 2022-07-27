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
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start flex">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              className="inline-block w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>

          <div className="hidden sm:inline w-22 h-22 md:p-2">
            <div className="flex content-center">
              {/* <Link href="/">
                <button className="">
                  <Image
                    src={
                      "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_logo.png"
                    }
                    height={"42px"}
                    width={"42px"}
                  />
                </button>
              </Link> */}
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center">
          <div className="flex items-stretch ">
            {/* <Link href="/">
              <a className="btn btn-sm rounded-btn active">Home</a>
            </Link> */}
            <Link href="/swap">
              <button className="btn btn-sm rounded-btn">Swap</button>
            </Link>
            <Link href="https://dex.krk.finance">
              <button className="btn btn-sm rounded-btn">DEX</button>
            </Link>
            <Link href="https://link.krk.finance/squad">
              <button className="btn btn-sm rounded-btn">DAO</button>
            </Link>
            <Link href="#">
              <button className="btn btn-sm rounded-btn" disabled={true}>
                Farms
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
          <div className="badge badge-sm badge-success">pre-alpha</div>
          <WalletMultiButton className="btn mx-2" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
