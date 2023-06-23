import Image from 'next/image';
import vc from '../../assets/img/vc.jpeg';

import { useState, type FC, useEffect } from 'react';
import { Connection } from '@solana/web3.js';
import { SOLANA_RPC_ENDPOINT } from 'constants/solana';

export const Presale: FC = () => {
  const [input, setInput] = useState<number | null>(null);
  const [popup, setPopup] = useState<boolean>(false);

  const [left, setLeft] = useState<number>();

  const connection = new Connection(SOLANA_RPC_ENDPOINT);

  const max = 79000000;
  const displayMax = max.toLocaleString(
    undefined, // leave undefined to use the visitor's browser
    // locale or a string like 'en-US' to override it.
    { minimumFractionDigits: 0 },
  );
  const displayLeft = max.toLocaleString(
    undefined, // leave undefined to use the visitor's browser
    // locale or a string like 'en-US' to override it.
    { minimumFractionDigits: 0 },
  );

  const onClick = async (input: number) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const tooglePopUp = () => {
    setPopup(!popup);
  };

  //   useEffect(() => {

  //   }, [])

  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
      <div className="relative card-body flex flex-col">
        <div className="flex">
          <h2 className="static card-title w-full leading-normal text-xl font-bold">
            token presale
          </h2>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex h-full items-center space-x-4">
            <div className="text-bold text-3xl">VC</div>
            <div>
              <Image
                src={vc}
                className="rounded-full border border-black"
                width={50}
                height={50}
                alt="vulture city logo"
              />
            </div>
          </div>
          <p className="w-full text-left">supply : {displayMax}</p>
          <p className="w-full text-left">available : {displayLeft}</p>
          <div className="justify-end mt-2">
            <div>sale progress :</div>
            <progress className="progress progress-warning w-56" value="42" max={max}></progress>
          </div>
          <div className="w-full">price : $0.01/token</div>
        </div>
        <hr className="my-2" />
        <div className="card-actions justify-end ">
          <div className="flex justify-center items-center w-full space-x-2">
            <input
              type="text"
              placeholder="Enter amount"
              className="input input-bordered input-warning w-full"
              value={input}
              onChange={(evt) => {
                setInput(parseInt(evt.target.value));
              }}
            />
            <span
              className="btn btn-md bg-gradient-to-tr from-[#9945FF] to-[#14F195] capitalize"
              onClick={() => onClick(input)}
            >
              Buy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
