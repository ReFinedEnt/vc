import { useEffect, useState } from 'react';
import ThreeDots from 'components/three-dots/three-dots.component';
import type { FC } from 'react';
import Mint from 'components/mint/mint.component';
import MintV2 from 'components/mintV2/mint.component';

const MintView: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="max-w-[100vw] mx-auto flex justify-center items-center">
      <div className="flex flex-col">
        {loading ? (
          <ThreeDots />
        ) : (
          <div className="hero flex flex-col justify-center items-center">
            {/* <Mint /> */}
            <MintV2 />
          </div>
        )}
      </div>
    </div>
  );
};

export default MintView;
