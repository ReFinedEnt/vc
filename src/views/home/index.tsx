import Image from 'next/image';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import JSConfetti from 'js-confetti';
import Popup from '../../components/popup/popup.component';
import { TREASURY, SOLANA_RPC_ENDPOINT } from '../../constants/solana';

import type { FC } from 'react';

import ThreeDots from 'components/three-dots/three-dots.component';
import Lore from 'components/lore/lore.component';

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
    <div className="w-[100vw] hero mx-auto bg-black h-screen justify-center items-center overflow-y-scroll">
      <div className="hero-content flex flex-col">
        {loading ? (
          <ThreeDots />
        ) : (
          <div className="hero flex flex-col justify-center items-center">
            <div className="w-full hero-content flex flex-col items-center h-[100vh] max-w-[963px]">
              <h1 className="text-8xl uppercase font-bold" id="main-title">
                Vulture City
              </h1>
              <span className="text-xl lowercase">DAO-operated gold mine & reserve ⛏️✨</span>
            </div>
            <Lore />
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
