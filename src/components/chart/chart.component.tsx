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

const Chart = ({ twitterId }: { twitterId: string }) => {
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState(Object);
  //   const [twitterId, setTwitterId] = useState('');

  console.log(twitterId);

  useEffect(() => {
    setLoading(true);
    getSupabase().finally(() => setLoading(false));
  }, []);

  const getSupabase = async () => {
    const value = await queryTwitter(twitterId).then((res) => {
      console.log(res);
      setSupabase(res);
    });
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
