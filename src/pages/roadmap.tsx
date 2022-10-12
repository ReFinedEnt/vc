// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { RoadMap } from 'views/roadmap';

const RoadMapPage: FC = ({}) => {
  return (
    <div className="md:hero mx-auto">
      <div className="md:hero-content flex flex-col mb-10">
        {/* <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2">
          <pre data-prefix="$">
            <code className="">  </code>
          </pre>
        </div>         */}
        <RoadMap />
        {/* <RequestAirdrop />
          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>} */}
      </div>
    </div>
  );
};

export default RoadMapPage;
