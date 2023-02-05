import { FC, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { queryTwitter } from "../../utils/supabase.utils";

import Spinner from "../spinner/spinner.component";

import {
  TWITTER_ID_FOUNDER_ONE,
  TWITTER_ID_FOUNDER_TWO,
} from "constants/constants";

const Chart = () => {
  const founders: string[] = [TWITTER_ID_FOUNDER_ONE, TWITTER_ID_FOUNDER_TWO];
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState(Array<Object>);
  const [founderOne, setFounderOne] = useState(Object);
  const [founderTwo, setFounderTwo] = useState(Object);

  useEffect(() => {
    setLoading(true);
    getSupabase().finally(() => setLoading(false));
  }, []);

  const getSupabase = async () => {
    founders.forEach(async (twitterId) => {
      console.log(twitterId);
      const value = await queryTwitter(twitterId).then((res) => {
        console.log(res);
        if (twitterId == TWITTER_ID_FOUNDER_ONE) {
          setFounderOne(res);
        } else if (twitterId == TWITTER_ID_FOUNDER_TWO) {
          setFounderTwo(res);
        }
      });
    });
    setSupabase([{ founderOne }, { founderTwo }]);
    console.log(supabase);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mx-auto">
          <LineChart
            width={420}
            height={300}
            data={supabase}
            margin={{ top: 5, right: 60, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="followers" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="followers" />
            <Tooltip />
          </LineChart>
        </div>
      )}
    </>
  );
};

export default Chart;
