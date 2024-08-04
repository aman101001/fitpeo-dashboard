import React from 'react'
import Overview from '../Overview/Overview'

function Dashboard() {
  return (
    <div className='col-span-2 sm:col-span-1 bg-primary p-4'>
        <p className='text-white text-xl font-bold pb-4'>Dashboard</p>
        <div className='grid  grid-rows-[500px,500px,1000px] grid-cols-1 sm:grid-cols-[65%,35%] gap-4 '>
             <Overview></Overview>
        </div>
    </div>
  )
}

export default Dashboard