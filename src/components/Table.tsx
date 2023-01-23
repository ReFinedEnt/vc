import React, { FC, useState, useContext, useEffect } from "react";

import axios from "axios";

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

import Spinner from "./Spinner";

const options = { method: "GET" };

const Table: FC = () => {
  // Loading State
  const [isLoading, setLoading] = useState(false);
  // Prices
  const [data, setData] = useState({});
  // Prometheus
  const [prom, setProm] = useState(0);
  // Result
  const [result, setResult] = useState([]);
  // BMA
  const [boom, setBoom] = useState(0);
  // SOL
  const [sol, setSol] = useState(0);

  const feth = async () => {
    try {
      fetch(
        "https://api.opensea.io/api/v1/collection/xborg-prometheus",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setProm(response.collection.stats.floor_price);
          console.log(prom);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
    try {
      await axios({
        method: "get",
        url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Csolana%2Cswissborg%2Cgods-unchained%2Cimmutable-x&vs_currencies=usd",
        responseType: "stream",
      }).then(function (response) {
        console.log(response.data);
        const data = JSON.parse(response.data);
        setData(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      await axios({
        method: "get",
        url: "https://quote-api.jup.ag/v3/price?ids=boomh1LQnwDnHtKxWTFgxcbdRjPypRSjdwxkAEJkFSH",
        responseType: "stream",
      }).then(function (response) {
        console.log(response.data);
        const data = JSON.parse(response.data);
        // const data = response.data['boomh1LQnwDnHtKxWTFgxcbdRjPypRSjdwxkAEJkFSH'];
        console.log(
          data.data["boomh1LQnwDnHtKxWTFgxcbdRjPypRSjdwxkAEJkFSH"].price
        );
        setBoom(data.data["boomh1LQnwDnHtKxWTFgxcbdRjPypRSjdwxkAEJkFSH"].price);
        console.log(`boom: ${boom}`);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      const connection = new Connection("https://api.devnet.solana.com");
      const walletKey = new PublicKey(
        "H37Zh3Hcu9N7vMqX8z2fAWXgsvpdT5VCvw55DwHzcBTm"
      );
      //The following returns the balance in LAMPORTS - https://docs.solana.com/terminology#lamport
      const balance = await connection.getBalance(walletKey);
      //So we convert it to SOL
      const solBalance = balance / LAMPORTS_PER_SOL;
      setSol(solBalance);
    } catch (error) {}

    try {
      setResult([
        {
          id: 0,
          chain: "ethereum",
          assets: [
            {
              slug: "eth",
              type: "fungible",
              qty: 0,
              raw: 0,
              usd: 0,
            },
            {
              slug: "xborg-prometheus",
              type: "non-fungible",
              qty: 1,
              raw: prom,
              usd: prom * data["ethereum"].usd,
            },
            {
              slug: "chsb",
              type: "fungible",
              qty: 259,
              raw: (259 * data["swissborg"].usd) / data["ethereum"].usd,
              usd: 259 * data["swissborg"].usd,
            },
          ],
          total: {
            raw: (259 * data["swissborg"].usd) / data["ethereum"].usd + prom,
            usd: prom * data["ethereum"].usd + 259 * data["swissborg"].usd,
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
              raw: (63.38 * data["immutable-x"].usd) / data["ethereum"].usd,
              usd: 63.38 * data["immutable-x"].usd,
            },
            {
              slug: "gods",
              type: "fungible",
              qty: 10.77,
              raw: (10.77 * data["gods-unchained"].usd) / data["ethereum"].usd,
              usd: 10.77 * data["gods-unchained"].usd,
            },
            {
              slug: "gu-cards",
              type: "non-fungible",
              qty: 333,
              raw: 0.29,
              usd: 0.29 * data["ethereum"].usd,
            },
          ],
          total: {
            raw:
              0.29 +
              (10.77 * data["gods-unchained"].usd) / data["ethereum"].usd +
              (63.38 * data["immutable-x"].usd) / data["ethereum"].usd,
            usd:
              0.29 * data["ethereum"].usd +
              10.77 * data["gods-unchained"].usd +
              63.38 * data["immutable-x"].usd,
          },
        },
        {
          id: 2,
          chain: "solana",
          assets: [
            {
              slug: "sol",
              qty: 0,
              raw: sol,
              usd: sol * data["solana"].usd,
            },
            {
              slug: "boom-army",
              qty: 4599,
              raw: (4599 * boom) / data["solana"].usd,
              usd: 4599 * boom,
            },
            {
              slug: "boom-heroes",
              qty: 3,
              raw: 3 * 0.23,
              usd: 3 * 0.23 * data["solana"].usd,
            },
          ],
          total: {
            raw: (4599 * boom) / data["solana"].usd + 3 * 0.23,
            usd: 3 * 0.23 * data["solana"].usd + 4599 * boom,
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      feth().finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-full ">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto w-50 text-neutral">
          <table
            className="table w-full  xs:max-sm:w-screen md:w-50"
            id="illuvium-stats"
          >
            {/* <!-- head --> */}
            <thead className="text-center bg-black">
              <tr className="font-bold text-white bg-black">
                <th className="bg-black">CHAIN</th>
                <th className="bg-black">ASSET</th>
                <th className="bg-black">QTY</th>
                <th className="bg-black">RAW</th>
                <th className="bg-black">USD</th>
              </tr>
            </thead>
            {/* <!-- table body --> */}
            <tbody className="text-center">
              {/* <!-- row --> */}
              {result.map((chain) => {
                // console.log(chain);
                return (
                  <>
                    <tr key={chain.id}>
                      <td className="text-xs text-white">{chain.chain}</td>
                      <td className="flex flex-col justify-center items-center text-white">
                        <table>
                          {chain.assets.map((asset) => {
                            console.log(asset);
                            return (
                              <tr
                                key={asset.slug}
                                className="text-center text-xs text-white"
                              >
                                {asset.slug}
                              </tr>
                            );
                          })}
                        </table>
                      </td>
                      <td>
                        <table className="flex flex-col justify-center items-center m-0 p-0">
                          {chain.assets.map((asset) => {
                            console.log(asset);
                            return (
                              <tr
                                key={asset.id}
                                className="text-center text-xs text-white"
                              >
                                {asset.qty}
                              </tr>
                            );
                          })}
                        </table>
                      </td>
                      <td>
                        <table className="flex flex-col justify-center items-center m-0 p-0">
                          {chain.assets.map((asset) => {
                            console.log(asset);
                            return (
                              <tr
                                key={asset.id}
                                className="text-center text-xs text-white"
                              >
                                {chain.chain == "solana" ? "◎" : "Ξ"}{" "}
                                {asset.raw.toFixed(2)}
                              </tr>
                            );
                          })}
                        </table>
                      </td>
                      <td>
                        <table className="flex flex-col justify-center items-center">
                          {chain.assets.map((asset) => {
                            console.log(asset);
                            return (
                              <tr
                                key={asset.id}
                                className="text-center text-xs text-white"
                              >
                                ${asset.usd.toFixed(2)}
                              </tr>
                            );
                          })}
                        </table>
                      </td>
                      {/* <td className="font-bold text-xs">
                      {entry.illuvialsDefeated}
                    </td>
                    <td className="font-bold text-xs">{entry.wave}</td> */}
                    </tr>
                    <table className="text-center">
                      <tr>
                        <th className="bg-black">TOTAL</th>
                        <th className="bg-black"></th>
                        <th className="bg-black"></th>
                        <th className="bg-black">
                          RAW {chain.chain == "solana" ? "◎" : "Ξ"}{" "}
                          {chain.total.raw.toFixed(2)}
                        </th>
                        <th className="bg-black">
                          USD ${chain.total.usd.toFixed(2)}
                        </th>
                      </tr>
                    </table>
                  </>
                );
              })}
              {/* <!-- end row --> */}
            </tbody>
            {/* <!-- foot --> */}
            {/* <tfoot className="text-center">
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Mastery</th>
          <th>Illuvials Defeated</th>
          <th>Wave</th>
        </tr>
      </tfoot> */}
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
