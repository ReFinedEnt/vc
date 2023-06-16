import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ThreeDots from '../../components/three-dots/three-dots.component';
import coolness from '../../components/coolness/coolness.component';
import type { FC } from 'react';

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

    if (completed == true) {
      setPopUploading(false);
      const awesomenessNb = coolness.length;
      const choice = coolness[Math.floor(Math.random() * (awesomenessNb - 0))];
      setEmoji(emojis[Math.floor(Math.random() * (emojis.length - 0))]);
      setAwesomeness(choice);
    }
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
              <div className="italic bottom-0 text-sm px-8">
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
