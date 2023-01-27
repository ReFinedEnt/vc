import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedTitle() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "hello anon.",
        "welcome to krk.finance",
        "we learn & buidl stuff",
        "we participate hackathons",
        "git push",
        "cat /etc/passwd",
        "echo '[your_address]' >> wl.txt",
        "^[a-z0-9_]{64}$",
        "we are crypto",
        "funds are safu : buy a ledger !",
      ],
      startDelay: 500,
      typeSpeed: 33,
      backSpeed: 33,
      backDelay: 1337,
      loop: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="xs:w-[full] lg:w-[420px] mx-auto mockup-code bg-black my-2  border-2 border-white z-50">
      <pre data-prefix=">_">
        <code className="">
          {" "}
          <span
            ref={el}
            // className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
          />{" "}
        </code>
      </pre>
    </div>
  );
}
