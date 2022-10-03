import { FC } from 'react';
import Link from 'next/link';
export const ContentContainer: FC = (props) => {
  return (
    <div className="flex-1 drawer h-100">
      {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content h-screen">
        {props.children}
      </div>

      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-black">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Toolbox
          </h1>

          <li>
            <Link href="/swap">
              <a className="drawer-glitch" data-content="Swap">
                Swap
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://dex.krk.finance">
              <a className="drawer-glitch" data-content="DEX">
                DEX
              </a>
            </Link>
          </li>

          {/* <li>
            <Link href="/farms">
              <a>Farms</a>
            </Link>
          </li>
          <li>
            <Link href="/rarity">
              <a>Rarity</a>
            </Link>
          </li>
          <li>
            <Link href="/broke">
              <a>Broke ?</a>
            </Link>
          </li> */}
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Governance
          </h1>
          <li>
            <Link href="/dao">
              <a className="drawer-glitch" data-content="DAO">
                DAO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a className="drawer-glitch" data-content="Roadmap">
                Roadmap
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/whitepaper">
              <a>Whitepaper</a>
            </Link>
          </li> */}
          {/* <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Archive
          </h1>
          <li>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Basics</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
