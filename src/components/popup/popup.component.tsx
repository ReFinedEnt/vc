import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ThreeDots from '../../components/three-dots/three-dots.component';
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import twitter from '../../assets/img/twitter.svg';

interface Props {
  tooglePopUp: () => void;
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<Props> = ({ tooglePopUp, completed }) => {
  const [popUploading, setPopUploading] = useState(true);
  const [awesomeness, setAwesomeness] = useState<string>();
  const [emoji, setEmoji] = useState<string>();

  useEffect(() => {
    const emojis = ['🤩', '🥳', '😍'];

    // if (completed == true) {
    //   setPopUploading(false);
    //   const awesomenessNb = coolness.length;
    //   const choice = coolness[Math.floor(Math.random() * (awesomenessNb - 0))];
    //   setEmoji(emojis[Math.floor(Math.random() * (emojis.length - 0))]);
    //   setAwesomeness(choice);
    // }
  }, [completed]);
  return (
    <div className="absolute flex w-[420px] h-[420px] items-center justify-center border border-primary z-[999] bg-black rounded-lg text-white">
      <div className="absolute right-[2.5%] top-4">
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={tooglePopUp} />
      </div>
      {popUploading ? (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
          <h2 className="mb-8">Your solana bro checks his wallet</h2>
          <ThreeDots />
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center space-y-10">
          {completed && (
            <>
              <p className="text-md font-bold text-white px-8 text-center">
                {awesomeness} {emoji}
              </p>
              <Link
                className="z-[999]"
                href="https://twitter.com/intent/tweet?text=I just help my solana bro  🫡%0A have you helped %40yoursolanabro ? 👀"
              >
                <div className="inline-flex items-center p-3 px-5 bg-gray-800 rounded font-mono font-bold tracking-tight btn jusitfy-center capitalize">
                  <Image src={twitter} alt="Twitter" /> <span className="ml-2">Share !</span>
                </div>
              </Link>
              <div className="italic bottom-0 text-sm px-8 text-center">
                * your solana bro gives you a piece of paper that looks like a ticket and leaves *
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Popup;
