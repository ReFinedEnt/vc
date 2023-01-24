import type { NextPage } from "next";
import Head from "next/head";

// React
import { useEffect, useState } from "react";

// Recharts
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

// Components
import Founders from "../components/analytics/founders";

const Socials: NextPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("useEffect firing !");
    const data = [{ name: "Page A", uv: 0, pv: 2400, amt: 2400 }];
    setData(data);
  });

  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

  return (
    <>
      <Head>
        <title>Analytics</title>
        <meta name="description" content="Analytics" />
      </Head>
      <div className="w-full flex justify-center items-center mx-auto">
        {renderLineChart}
      </div>
    </>
  );
};

export default Socials;
