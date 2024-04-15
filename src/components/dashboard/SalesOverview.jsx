import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Apple: 4000,
    Samsung: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Apple: 3000,
    Samsung: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    Apple: 2000,
    Samsung: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Apple: 2780,
    Samsung: 3908,
    
    amt: 2000,
  },
  {
    name: 'May',
    Apple: 1890,
    Samsung: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    Apple: 2390,
    Samsung: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Apple: 3490,
    Samsung: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Apple: 4490,
    Samsung: 3300,
    amt: 2100,
  },
  {
    name: 'Sept',
    Apple: 4090,
    Samsung: 3600,
    amt: 2100,
  },
  {
    name: 'Oct',
    Apple: 4790,
    Samsung: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Apple: 4800,
    Samsung: 4400,
    amt: 2100,
  },
  {
    name: 'Dec',
    Apple: 6000,
    Samsung: 4500,
    amt: 2100,
  },
];

const SalesOverview = () => {
  return (
    <div className="h-[22rem] bg-white p-6 rounded-xl m-8 mt-8 flex flex-col flex-1">
    <strong className="text-gray-700 font-medium">Sales Overview</strong>
<div className="mt-3 w-full flex-1 text-xs">
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Samsung" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Apple" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> 
      </div>
      </div>
       )
}

export default SalesOverview