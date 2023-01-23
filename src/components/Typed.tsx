import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedTitle() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'hello anon',
        'welcome to krk.finance',
        'we buidl stuff',
        'we participate hackathons',
        'sudo rm -rf / --no-preserve-root',
        '^[a-z0-9_]{64}$',
        'we are crypto'
      ],
      startDelay: 500,
      typeSpeed: 42,
      backSpeed: 42,
      backDelay: 2000,
      loop: false
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="max-w-md mx-auto mockup-code bg-black p-6 my-2 w-[420px] border-2 border-white z-50">
      <pre data-prefix=">_">
        <code className="">
          {' '}
          <span
            ref={el}
            // className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
          />{' '}
        </code>
      </pre>
    </div>
  );
}
