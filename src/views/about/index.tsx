import { useEffect, useState, useCallback, useMemo } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import { TREASURY, SOLANA_RPC_ENDPOINT } from 'constants/solana';

import ThreeDots from 'components/three-dots/three-dots.component';
import Popup from 'components/popup/popup.component';

import type { FC } from 'react';
import { Community, TxType } from 'types';

const AboutView: FC = () => {
  const [loading, setLoading] = useState(true);
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  const [popup, setPopup] = useState(false);
  const [helped, setHelped] = useState<boolean>(false);
  const [completed, setCompleted] = useState(true);

  const [data, setData] = useState<Community[] | null>(null);

  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const tooglePopUp = () => {
    setPopup(!popup);
  };

  const onClick = useCallback(
    async (index: number) => {
      console.log(index);
      if (!publicKey) throw new WalletNotConnectedError();

      const lamports = 30000000 + index;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: TREASURY,
          lamports: lamports,
        }),
      );

      const signature = await sendTransaction(transaction, connection);

      const latestBlockHash = await connection.getLatestBlockhash();

      setPopup(true);

      await connection
        .confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: signature,
        })
        .then(({ context, value }) => {
          if (value.err == null && context.slot) {
            setHelped(true);
            setCompleted(true);
          }
        });
    },
    [publicKey, sendTransaction, connection],
  );

  return (
    <div className="max-w-[100vw] mx-auto min-h-screen flex flex-col justify-center items-center bg-black pb-40">
      {loading ? (
        <ThreeDots />
      ) : (
        <>
          <div className="hero flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-flow-col grid-flow-row gap-4"></div>
          </div>
          {popup && (
            <Popup tooglePopUp={tooglePopUp} completed={completed} setCompleted={setCompleted} />
          )}
        </>
      )}
    </div>
  );
};

export default AboutView;
