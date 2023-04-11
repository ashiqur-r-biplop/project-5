import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import OthersHeader from "../OthersHeader/OthersHeader";

const Statistics = () => {
  const data = [
    {
      name: "Assignment - 01",
      Totat_number: "60",
      pv: "60",
    },
    {
      name: "Assignment - 02",
      pv: "60",
    },
    {
      name: "Assignment - 03",
      pv: "60",
    },
    {
      name: "Assignment - 04",
      pv: "60",
    },
    {
      name: "Assignment - 05",
      pv: "60",
    },
    {
      name: "Assignment - 06",
      pv: "60",
    },
    {
      name: "Assignment - 07",
      pv: "60",
    },
    {
      name: "Assignment - 08",
      pv: "60",
    },
  ];

  return (
    <div>
      <OthersHeader>Statistics</OthersHeader>
      <div className="mx-auto  border my-5 lg:w-11/12">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width="100%"
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
