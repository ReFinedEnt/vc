import React, { FC, useState, useEffect, useMemo } from 'react';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import type { User } from 'types';
import Spinner from 'components/spinner/spinner.component';

// import placeholder from '/placeholder.png';

import { getTransactions } from 'tools/tx';
import { TREASURY, SOLANA_RPC_ENDPOINT } from 'constants/solana';
import ThreeDots from 'components/three-dots/three-dots.component';

const Table: FC = () => {
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState<User[]>();

  useEffect(() => {
    const txHandler = async () => {
      return await getTransactions(TREASURY, connection);
    };
    txHandler()
      .then((helps) => {
        setData(helps);
      })
      .finally(() => setLoading(false));
  }, [connection]);

  let x = 0;

  console.log(data);

  return (
    <>
      {isLoading ? (
        <ThreeDots />
      ) : (
        <div className="overflow-x-auto w-50 text-neutral">
          <table className="table w-full max-w-screen border border-primary" id="illuvium-stats">
            {/* <!-- head --> */}
            <thead className="text-center bg-black">
              <tr className="font-bold text-white bg-black">
                <th className="bg-black">Rank</th>
                <th className="bg-black">Address</th>
                <th className="bg-black">Helps</th>
                <th className="bg-black">Total</th>
              </tr>
            </thead>
            {/* <!-- table body --> */}
            <tbody className="text-center">
              {/* <!-- row --> */}
              {data.map((entry) => {
                x++;
                return (
                  <tr key={entry.address}>
                    <td className="text-xs bg-white">#{x}</td>
                    <td className="bg-white">
                      <div className="flex items-center justify-left">
                        <div className="avatar">
                          <div className="mask mask-hexagon w-12 h-12">
                            {/* <img
                              src={`${entry.illuvitar ? entry.illuvitar : '/placeholder.png'} `}
                              alt={`${entry.nickname}'s Illuvitar`}
                              width={48}
                              height={48}
                            /> */}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm ml-3">{entry.address}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-xs bg-white">{entry.lamports / 40000000}</td>
                    <td className="text-xs bg-white">{entry.lamports / LAMPORTS_PER_SOL}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
