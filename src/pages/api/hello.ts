// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

type Asset = {
  slug: string;
  type: string;
  qty: number;
  raw: number;
  usd: number;
};

type Chain = {
  id: number;
  chain: string;
  assets: Asset[];
  total: {
    raw: number;
    usd: number;
  };
};

type Data = {
  assets: Chain[];
};

let promfloor = 0;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const promFloor = async () => {
    const options = { method: "GET" };
    await fetch(
      "https://api.opensea.io/api/v1/collection/xborg-prometheus",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        promfloor = response.collection.stats.floor_price;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ethUsd = async () => {
    const options = { method: "GET" };
    let usd = 0;
    await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        usd = response.data["ethereum"]["usd"];
      })
      .catch((error) => {
        console.log(error);
      });
    return usd;
  };

  await promFloor().then(async () => {
    const usd = await ethUsd();
    res.status(200).json({
      assets: [
        {
          id: 0,
          chain: "ethereum",
          assets: [
            {
              slug: "xborg-prometheus",
              type: "non-fungible",
              qty: 1,
              raw: promfloor,
              usd: promfloor * usd,
            },
            {
              slug: "swissborg",
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
              slug: "immutable-x",
              type: "fungible",
              qty: 63.38,
              raw: 0,
              usd: 0,
            },
            {
              slug: "gods-unchained",
              type: "fungible",
              qty: 10.77,
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
              type: "fungible",
              qty: 4599,
              raw: 0,
              usd: 0,
            },
            {
              slug: "boom-heroes",
              type: "non-fungible",
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
      ],
    });
  });
}
