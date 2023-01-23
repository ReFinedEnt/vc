// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const QuestView: FC = ({}) => (
  <p className="wrapper w-[963] rounded-3xl">
    <div className="w-full mx-auto flex flex-col justify-center items-center text-center p-5 iso rounded-3xl">
      <p className="w-full text-base text-white rounded-3xl">
        {/* INSPIRATION */}
        Inspired by y00ts & fronks, KRK is a SPL token and upcoming mint on
        Solana.
      </p>
      {/* TITLE */}
      <h1 className="text-2xl w-100 z-[999]">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Initial Quest Event
        </span>{" "}
        ⚔️🔥
      </h1>
      <hr />
      {/* Initial Quest Event */}
      <p className="w-full text-base text-white text-justify ">
        KRK was created with a starting supply of <strong>100,000,000</strong>.
        <hr />
        During 1 month, the community will quest for a share of{" "}
        <strong>95%</strong> of KRK total supply ⚔️
        <hr />
        5% - 5,000,000 KRK - of the total supply for core team to be vested
        appropriately.
        <hr />
        1% - 1,000,000 - to bootstrap liquidity pairs included in core team.
        <hr />
        This leaves us 95% - 95,000,000 KRK -
        <hr />
        Divided equally :
        <hr />
        50% - 47,500,000 KRK - Earn through quests ⚔️
        <ul>
          50% - 47,500,000 KRK - Liquidity Mining
          <hr />
          <li>
            50% - 23,750,000 KRK (KRK/SOL : 50% - 11,875,000 KRK + KRK/USD : 50%
            - 11,875,000 KRK)
          </li>
        </ul>
        <ul>50% - 23,750,000 KRK - NFT 🥩</ul>
        <hr />
        At the end of the Initial Quest Event, any KRK not claimed throught
        quests will be burnt 🔥
        <hr />
      </p>
    </div>
  </p>
);
