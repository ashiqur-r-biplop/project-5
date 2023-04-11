import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import OthersHeader from "../OthersHeader/OthersHeader";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../Loading-Spinner/LoadingSpinner";

const Statistics = () => {

  const data = [
    {
      name: "Assignment - 01",
      Totat_number: "60",
      Marks: "60",
    },
    {
      name: "Assignment - 02",
      Marks: "60",
    },
    {
      name: "Assignment - 03",
      Marks: "60",
    },
    {
      name: "Assignment - 04",
      Marks: "60",
    },
    {
      name: "Assignment - 05",
      Marks: "60",
    },
    {
      name: "Assignment - 06",
      Marks: "60",
    },
    {
      name: "Assignment - 07",
      Marks: "60",
    },
    {
      name: "Assignment - 08",
      Marks: "60",
    },
  ];
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
                <stop offset="5%" stopColor="#9873FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9873FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9873FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9873FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#9873FF"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Marks"
              stroke="#9873FF"
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
