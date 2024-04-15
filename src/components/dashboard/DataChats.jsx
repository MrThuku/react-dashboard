import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Expense: 4000,
    Earnings: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Expense: 3000,
    Earnings: 1398,
    amt: 2210,
  },
  {
    name: ' Mar',
    Expense: 2000,
    Earnings: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Expense: 2780,
    Earnings: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Expense: 1890,
    Earnings: 4800,
    amt: 2181,
  },
  {
    name: ' Jun',
    Expense: 2990,
    Earnings: 4800,
    amt: 2500,
  },
  {
    name: 'July',
    Expense: 3490,
    Earnings: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Expense: 3790,
    Earnings: 4800,
    amt: 2100,
  },
  {
    name: 'Sept',
    Expense: 3490,
    Earnings: 4500,
    amt: 2100,
  },
  {
    name: 'Oct',
    Expense: 4490,
    Earnings: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Expense:4490,
    Earnings: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Expense: 3490,
    Earnings: 4300,
    amt: 2100,
  },
];

export default function DataChats() {
  
    return (
      <div className="h-[22rem] bg-white p-6 rounded-xl m-8 mt-8 flex flex-col flex-1">
      			<strong className="text-gray-700 font-medium">Bar Chart</strong>
      		<div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={400}
        // className=' w-full h-full'
        style={{ backgroundColor: 'white'}}
        data={data}
        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Earnings"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="Expense"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
    
      </div>
      </div>
    );
  }

// import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// const data = [
// 	{
// 		name: 'Jan',
// 		Expense: 5000,
// 		Earnings: 2400
// 	},
// 	{
// 		name: 'Feb',
// 		Expense: 3900,
// 		Earnings: 2398
// 	},
// 	{
// 		name: 'Mar',
// 		Expense: 4000,
// 		Earnings: 9800
// 	},
// 	{
// 		name: 'Apr',
// 		Expense: 2780,
// 		Earnings: 3908
// 	},
// 	{
// 		name: 'May',
// 		Expense: 1890,
// 		Earnings: 4200
// 	},
// 	{
// 		name: 'Jun',
// 		Expense: 2390,
// 		Earnings: 3800
// 	},
// 	{
// 		name: 'July',
// 		Expense: 3490,
// 		Earnings: 4300
// 	},
// 	{
// 		name: 'Aug',
// 		Expense: 2000,
// 		Earnings: 9800
// 	},
// 	{
// 		name: 'Sep',
// 		Expense: 2780,
// 		Earnings: 3908
// 	},
// 	{
// 		name: 'Oct',
// 		Expense: 1890,
// 		Earnings: 4800
// 	},
// 	{
// 		name: 'Nov',
// 		Expense: 2390,
// 		Earnings: 3800
// 	},
// 	{
// 		name: 'Dec',
// 		Expense: 3490,
// 		Earnings: 4300
// 	}
// ]

// export default function TransactionChart() {
// 	return (
// 		<div className="h-[22rem] bg-white p-6 rounded-sm m-8 mt-8 flex flex-col flex-1">
// 			<strong className="text-gray-700 font-medium">Transactions</strong>
// 			<div className="mt-3 w-full flex-1 text-xs">
// 				<ResponsiveContainer width="100%" height="100%">
// // 					<BarChart
// 						width={500}
// 						height={300}
// 						data={data}
// 						margin={{
// 							top: 20,
// 							right: 10,
// 							left: -10,
// 							bottom: 0
// 						}}
// 					>
// 						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
// 						<XAxis dataKey="name" />
// 						<YAxis />
// 						<Tooltip />
// 						<Legend />
// 						<Bar dataKey="Earnings" fill="#0ea5e9" />
// 						<Bar dataKey="Expense" fill="#ea580c" />
// 					</BarChart>
				// </ResponsiveContainer>
// 			</div>
// 		</div>
// 	)
// }