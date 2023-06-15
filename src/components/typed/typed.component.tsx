import React, { useEffect, useRef } from 'react';
import excuses from '../../components/excuses/excuses.component';
import Typed from 'typed.js';

const excusesNb = excuses.length;

const arr = [
  "Here's the deal, my man.\nI found myself in a serious pickle, right?\nLong story short, I accidentally joined a hipster synchronized swimming team, and now they want me to buy an emergency supply of artisanal goggles.\nHelp a bro out before I drown in the irony, dude!",
];

export default function TypedTitle() {
  const choice = [excuses[Math.floor(Math.random() * (excusesNb - 0))]];
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: choice,
      startDelay: 500,
      typeSpeed: 42,
      backSpeed: 42,
      backDelay: 1111,
      loop: false,
      smartBackspace: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="md:w-[50vw] w-screen mx-auto mockup-code bg-black border-2 border-white overflow-hidden px-4">
      <code className="">
        {' '}
        <span
          ref={el}
          className="text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] code-font"
        />{' '}
      </code>
    </div>
  );
}
