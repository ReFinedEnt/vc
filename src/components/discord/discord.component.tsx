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
    const env = "prod";
    const value = await queryDiscord(env).then((res) => {
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
            <Line type="monotone" dataKey="members" stroke="#9945FF" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis dataKey="members" />
            <Tooltip
              itemStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
              // labelStyle={{ color: "black" }}
            />
          </LineChart>
        </div>
      )}
    </>
  );
};

export default Discord;
