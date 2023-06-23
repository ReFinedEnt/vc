import Image from 'next/image';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import JSConfetti from 'js-confetti';
import TypedTitle from '../../components/typed/typed.component';
import Popup from '../../components/popup/popup.component';
import { TREASURY, SOLANA_RPC_ENDPOINT } from '../../constants/solana';

import type { FC } from 'react';

import ThreeDots from 'components/three-dots/three-dots.component';

const HomeView: FC = () => {
  // const { connection } = useConnection();
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);

  const [loading, setLoading] = useState(true);
  const [userWallet, setUserWallet] = useState(null);
  const [helped, setHelped] = useState<boolean>(false);
  const [popup, setPopup] = useState(false);
  const [completed, setCompleted] = useState(true);

  const { publicKey, sendTransaction } = useWallet();

  const tooglePopUp = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  useEffect(() => {
    if (publicKey) {
      console.log(publicKey);
      setUserWallet(publicKey);
    } else {
      setUserWallet(null);
    }
  }, [publicKey]);

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: TREASURY,
        lamports: 40000000,
      }),
    );

    const signature = await sendTransaction(transaction, connection);

    const latestBlockHash = await connection.getLatestBlockhash();

    setPopup(true);

    const tx = await connection
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
  }, [publicKey, sendTransaction, connection]);

  useEffect(() => {
    if (helped == true) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  }, [helped]);

  return (
    <div className="max-w-[100vw] hero mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
      <div className="hero-content flex flex-col">
        {loading ? (
          <ThreeDots />
        ) : (
          <div className="hero flex flex-col justify-center items-center">
            <div className="w-full hero-content flex flex-col items-center ">
              <div className="px-4">{<TypedTitle />}</div>
              <div className="text-lg text-white mb-3 leading-normal flex flex-col justify-center items-center">
                <span
                  className="btn btn-md bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
                  onClick={onClick}
                >
                  Help your Solana Bro ?
                </span>
              </div>
            </div>
          </div>
        )}
        {popup && (
          <Popup tooglePopUp={tooglePopUp} completed={completed} setCompleted={setCompleted} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
