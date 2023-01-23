import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import axios from "axios";

import Table from "../components/Table";

const options = { method: "GET" };

const book = [
  {
    id: 0,
    chain: "ethereum",
    assets: [
      {
        slug: "xborg-prometheus",
        type: "non-fungible",
        qty: 1,
        raw: 0,
        usd: 0,
      },
      {
        slug: "chsb",
        type: "fungible",
        qty: 259,
        raw: 0,
        usd: 0,
      },
    ],
    total: {
      raw: 0,
      usd: 0,
    },
  },
  {
    id: 1,
    chain: "immutable-x",
    assets: [
      {
        slug: "imx",
        type: "fungible",
        qty: 63.38,
        raw: 0,
        usd: 0,
      },
      {
        slug: "gods",
        type: "fungible",
        qty: 10.77,
        raw: 0,
        usd: 0,
      },
      {
        slug: "gods-unchained",
        type: "non-fungible",
        qty: 333,
        raw: 0,
        usd: 0,
      },
    ],
    total: {
      raw: 0,
      usd: 0,
    },
  },
  {
    id: 2,
    chain: "solana",
    assets: [
      {
        slug: "boom-army",
        qty: 4599,
        raw: 0,
        usd: 0,
      },
      {
        slug: "boom-heroes",
        qty: 3,
        raw: 0,
        usd: 0,
      },
    ],
    total: {
      raw: 0,
      usd: 0,
    },
  },
];

const Assets: NextPage = (props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-center text-xl font-bold text-transparent bg-clip-text my-5 tracking-tight bg-gradient-to-tr from-[#9945FF] to-[#14F195] rgbg">
        Asset Management
      </h1>
      <div className="">
        <Table />
      </div>
    </div>
  );
};

export default Assets;
