import { useState, useEffect } from 'react';

import ThreeDots from 'components/three-dots/three-dots.component';

import type { FC } from 'react';

const AboutView: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="max-w-[100vw] mx-auto min-h-screen flex flex-col items-center bg-black pb-40">
      {loading ? (
        <ThreeDots />
      ) : (
        <div className="flex flex-col justify-center items-center max-w-[963px] mt-[67.5px]">
          <h1 className="text-3xl capitalize font-bold" id="main-title">
            <h1>About Us</h1>
          </h1>
          <div className="max-w-[963px]">
            <p>
              Refined Enterprises LLC is a precious mineral & aquisition company based in Central
              Arizona.
            </p>
            <p>
              With our visionary approach to gold exploration utilizing blockchain technology, our
              company is poised to revolutionize the industry.
            </p>
            <p>
              By leveraging the benefits of the Solana Network, we can address critical challenges
              in logisitics, reclaim abandoned sites, promote responsible mining practices, and
              deliver value to our community.
            </p>
            <p>
              We invite potential partners to join us on this transformative journey towards a more
              sustainable and efficient future for gold mining.
            </p>
            {/* <p>Entity Type: ARIZONA DOMESTIC LIMITED-LIABILITY COMPANY</p>
            <p>File Number: 23242044</p>
            <p>Filing State: Arizona</p>
            <p>Filing Status: Active</p>
            <p>Filing Date: May 31, 2021</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutView;
