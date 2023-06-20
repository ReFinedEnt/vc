import React, { FC, useState, useEffect, useMemo } from 'react';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

import { TREASURY, SOLANA_RPC_ENDPOINT } from 'constants/solana';
import ThreeDots from 'components/three-dots/three-dots.component';
import { getTransactions } from 'tools/tx';
import { ellipsis } from 'tools/ellipsis';
import { TxType, User } from 'types';

const Table: FC = () => {
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState<User[]>();

  useEffect(() => {
    const txHandler = async () => {
      const type = TxType.User;
      return await getTransactions(TREASURY, connection, 40000000);
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
          <table className="table w-full max-w-screen border border-primary rounded-lg">
            {/* <!-- head --> */}
            <thead className="text-center bg-black">
              <tr className="font-bold text-white bg-black">
                <th className="bg-black">Rank</th>
                <th className="bg-black">Address</th>
                <th className="bg-black">Helps</th>
                {/* <th className="bg-black">Total</th> */}
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
                        <div className="text-sm ml-3">{ellipsis(entry.address)}</div>
                      </div>
                    </td>
                    <td className="text-xs bg-white">{entry.lamports / 40000000}</td>
                    {/* <td className="text-xs bg-white">{entry.lamports / LAMPORTS_PER_SOL}</td> */}
                  </tr>
                );
              })}
            </tbody>
            {/* <tfoot className="text-center bg-black border border-primary">
              <tr className="font-bold text-white bg-black text-center">
                <th className="bg-black">total help</th>
                <th className="bg-black"></th>
                <th className="bg-black">total help</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
