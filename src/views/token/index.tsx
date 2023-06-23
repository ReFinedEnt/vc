import { useEffect, useState } from 'react';
import ThreeDots from 'components/three-dots/three-dots.component';
import { Presale } from 'components/presale';
import type { FC } from 'react';

const TokenView: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="max-w-[100vw] mx-auto flex justify-center items-center mt-[67.5px]">
      <div className="flex flex-col">
        {loading ? (
          <ThreeDots />
        ) : (
          <div className="hero flex flex-col justify-center items-center">
            <Presale />
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenView;
