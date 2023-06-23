import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedTitle() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['choice'],
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
