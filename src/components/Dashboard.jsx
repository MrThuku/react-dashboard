import React from 'react'
import TopCards from './dashboard/TopCards'
import DataChats from './dashboard/DataChats'
import SalesOverview from './dashboard/SalesOverview'
import PieChartData from './dashboard/PieChartData'
// import TopSelling from './dashboard/TopSelling'
// import Products from './Products'
const Dashboard = () => {
  return (
    <div className=' overflow-auto'>
      <TopCards />

      <DataChats/>
      {/* <div className=' flex flex-wrap lg:flex-nowrap justify-evenly '> */}
      <SalesOverview/>
      <PieChartData/>
      {/* <TopSelling/> */}
      {/* </div> */}
    </div> 
  )
}

export default Dashboard