import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
      <div className="mx-auto  border my-5 lg:w-11/12">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width="100%"
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="Totat_number" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="pv of pages"
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
            />
            <Line
              name="uv of pages"
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
