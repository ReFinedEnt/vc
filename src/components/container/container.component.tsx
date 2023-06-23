import { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};
export const ContentContainer: FC<Props> = (props) => {
  return (
    <div className="drawer w-full pt-[67.5px]">
      {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content min-h-screen">{props.children}</div>

      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-black">
          <h1 className="ml-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            Dapp Next
          </h1>
          <li>
            <Link href="https://krk.finance/">HOME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
