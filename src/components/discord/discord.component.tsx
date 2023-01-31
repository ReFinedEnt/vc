import { FC, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { queryTwitter, queryDiscord } from "../../utils/supabase.utils";

import Spinner from "../spinner/spinner.component";

const Discord = () => {
  const [loading, setLoading] = useState(true);
  const [discord, setDiscord] = useState(Object);

  useEffect(() => {
    setLoading(true);
    getSupabase().finally(() => setLoading(false));
  }, []);

  const getSupabase = async () => {
    const value = await queryDiscord().then((res) => {
      console.log(res);
      setDiscord(res);
    });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mx-auto mb-[111px]">
          <LineChart
            width={420}
            height={300}
            data={discord}
            margin={{ top: 5, right: 60, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="members" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="members" />
            <Tooltip />
          </LineChart>
        </div>
      )}
    </>
  );
};

export default Discord;
