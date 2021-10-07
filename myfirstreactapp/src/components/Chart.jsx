import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    price: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    price: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    price: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    price: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    price: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Year",
    price: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart({ data }) {
  // console.log("Our Data", data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="t" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
