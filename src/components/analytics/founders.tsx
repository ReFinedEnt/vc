import type { NextPage } from "next";
import Head from "next/head";

// React
import { useEffect, useState } from "react";

// Recharts
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

// Components

const Founders: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("useEffect firing !");
  });

  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
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
        <h1>aaa</h1>
        {renderLineChart}
      </div>
    </>
  );
};

export default Founders;
