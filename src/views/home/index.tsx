import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Spinner from '../../components/spinner/spinner.component';
import type { FC } from 'react';

const HomeView: FC = () => {
  const [loading, setLoading] = useState(true);
  const [userWallet, setUserWallet] = useState(null);

  const wallet = useWallet();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey);
      setUserWallet(wallet.publicKey);
    } else {
      setUserWallet(null);
    }
  }, [wallet.publicKey]);

  return (
    <>
      <div className="max-w-[100vw] hero mx-auto bg-black min-h-screen flex justify-center items-center -mt-[67.5px]">
        <div className="hero-content flex flex-col">
          {loading ? (
            <Spinner />
          ) : (
            <div className="hero flex flex-col justify-center items-center">
              <div className="w-full hero-content flex flex-col items-center ">
                {/* MAIN TITLE */}
                <h1 className="leading-normal text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                  Solana Bro
                </h1>
                <div className="text-lg text-white mb-3 leading-normal flex flex-col justify-center items-center">
                  <span className="btn btn-md bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
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
