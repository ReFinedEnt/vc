import { useEffect, useState, useCallback } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Connection, Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import Spinner from '../../components/spinner/spinner.component';
import TypedTitle from 'components/typed/typed.component';
import { TREASURY, SOLANA_RPC_ENDPOINT } from 'constants/solana';
import type { FC } from 'react';

const HomeView: FC = () => {
  const { connection } = useConnection();
  // const connection = new Connection(SOLANA_RPC_ENDPOINT);

  const [loading, setLoading] = useState(true);
  const [userWallet, setUserWallet] = useState(null);

  const { publicKey, sendTransaction } = useWallet();

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
        lamports: 20000,
      }),
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, 'processed');
  }, [publicKey, sendTransaction, connection]);

  return (
    <>
      <div className="max-w-[100vw] hero mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
        <div className="hero-content flex flex-col">
          {loading ? (
            <Spinner />
          ) : (
            <div className="hero flex flex-col justify-center items-center">
              <div className="w-full hero-content flex flex-col items-center ">
                <p className="px-4">{<TypedTitle />}</p>

                <div className="text-lg text-white mb-3 leading-normal flex flex-col justify-center items-center">
                  <span
                    className="btn btn-md bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
                    onClick={onClick}
                  >
                    {/* <span className="btn btn-md bg-gradient-to-tr from-[#14F195] to-[#9945FF]"> */}
                    Help your Solana Bro
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeView;
