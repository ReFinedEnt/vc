import { FC } from "react";
import Link from "next/link";

export const NavBar: FC = (props) => {
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
              &gt;_
            </div>
          </label>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center z-[999]">
          <div className="flex items-stretch z-[999]">
            <Link href="https://krk.finance/">
              <button
                className="btn btn-sm btn-ghost rounded-btn text-glitch"
                data-content="HOME"
              >
                HOME
              </button>
            </Link>
            <Link href="https://krk.finance/roadmap">
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
          {/* <Link href="https://krk.finance/wl">
            <button
              className="btn btn-sm btn-ghost rounded-btn text-glitch"
              data-content="Get WL."
            >
              Get WL.
            </button>
          </Link>
          <Link href="https://krk.finance/sign-in">
            <button className="btn btn-sm btn-success mr-10 mx-5 px-5 z-[999]">
              Sign-In
            </button>
          </Link> */}
          {/* <WalletMultiButton className="btn mx-2 z-[999]" /> */}
        </div>
      </div>
      {props.children}
    </div>
  );
};
