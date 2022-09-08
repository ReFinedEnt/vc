import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedTitle() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'hello anon',
        'welcome to krk.finance',
        'we build stuff',
        'we participate hackathons',
        'we 🖤 crypto',
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2">
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
