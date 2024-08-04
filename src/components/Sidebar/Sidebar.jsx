import React from 'react'

function Sidebar() {
  return (
    <div className='hidden sm:block  sidebarHeight bg-secondary space-y-6 pt-4'>
       <div className='border-l-2 border-blue-600 flex center cursor-pointer'>
          <i className="fa-solid fa-house text-lg text-ternary text-blue-600"></i>
       </div>
       <div className='border-l-1 flex center cursor-pointer'>
          <i className="fa-solid fa-chart-column text-lg text-ternary"></i>
       </div>
       <div className='border-l-1 flex center cursor-pointer'>
           <i className="fa-solid fa-user text-lg text-ternary"></i>
       </div>
       <div className='border-l-1 flex center cursor-pointer'>
           <i className="fa-solid fa-calendar-days text-lg text-ternary"></i>
       </div>
       <div className='border-l-1 flex center cursor-pointer'>
           <i className="fa-solid fa-location-dot text-lg text-ternary"></i>
       </div>
    </div>
  )
}

export default Sidebar