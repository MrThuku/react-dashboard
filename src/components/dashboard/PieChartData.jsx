import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";

const data = [
  { name: "Samsung", value: 500 },
  { name: "Apple", value: 650 },
  { name: "Others", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartData = () => {
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 ml-16 rounded-sm flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Yearly Sales</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" flex flex-col">
        <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
          <span>
            {" "}
            <GoDotFill />
          </span>
          <span> Samsung</span>
        </p>
        <p className="flex items-center gap-2 text-blue-600 hover:drop-shadow-xl">
          <span>
            {" "}
            <GoDotFill />
          </span>
          <span> Apple</span>
        </p>
        <p className="flex items-center gap-2 text-yellow-500 hover:drop-shadow-xl">
          <span>
            {" "}
            <GoDotFill />
          </span>
          <span> Others</span>
        </p>
      </div>
    </div>
  );
};

export default PieChartData;
