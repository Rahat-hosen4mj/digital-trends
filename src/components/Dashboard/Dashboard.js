import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-2">
      <div className="px-3 mx-3 mt-12">
        <h2 className="text-2xl text-blue-600 font-medium mb-5">
          Month Wise Sell
        </h2>
        <LineChart width={500} height={400} data={data}>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <Tooltip />
          <YAxis></YAxis>
        </LineChart>
      </div>
      <div className="ml-5 mt-5 p-5">
        <h2 className="text-2xl text-blue-600 font-medium mb-5">
          Investment vs Revenue
        </h2>
        <BarChart width={530} height={420} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"month"} fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
