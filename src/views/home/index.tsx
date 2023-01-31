// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Spinner from "../../components/spinner/spinner.component";
import Chart from "../../components/chart/chart.component";

import {
  TWITTER_ID_FOUNDER_ONE,
  TWITTER_ID_FOUNDER_TWO,
} from "../../constants/constants";

export const HomeView: FC = ({}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="xs:max-w-[100vw] md:hero mx-auto bg-black">
      {/* <div className="w-full min-h-screen absolute top-0 bg-[rgba(0,0,0,0.1)] z-3"></div> */}

      <div className="md:hero-content hero-content flex ">
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-2 mx-auto">
            {/* FOUNDER ONE */}
            <div className="mx-auto">
              <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] w-100 z-[999]">
                €$¥
              </h2>
              <div className="w-full flex justify-center items-center">
                <Chart twitterId={TWITTER_ID_FOUNDER_ONE} />
              </div>
            </div>

            {/* FOUNDER TWO */}
            <div className="mx-auto">
              <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] w-100 z-[999]">
                BHEET
              </h2>
              <div className="w-full flex justify-center items-center">
                <Chart twitterId={TWITTER_ID_FOUNDER_TWO} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
