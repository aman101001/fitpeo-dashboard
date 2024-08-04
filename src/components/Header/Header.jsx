import React from 'react'

function Header() {
  return (
    <div className='col-span-2 bg-secondary flex'>
        <div className='w-16 h-full flex center'>
            <i className="fa-solid fa-bars text-white text-xl cursor-pointer"></i>
        </div>
        <div className='flex justify-between w-full p-4'>
            <div className='relative h-full w-[40%]'>
                <input type="text" placeholder='Search' className=' bg-ternary h-full w-full pb-px placeholder:text-ternary placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm text-secondary ps-6 sm:ps-8 pe-4 rounded-sm outline-none border border-slate-600'></input>
                <i className="fa-solid fa-magnifying-glass absolute top-2 left-2 text-ternary text-xs sm:text-sm"></i>
            </div>
            <div className='flex space-x-2 sm:space-x-4 center'>
                 <div className='h-7 w-7 sm:h-9 sm:w-9 bg-slate-600 flex center rounded-full cursor-pointer'> 
                     <i className="fa-solid fa-envelope text-ternary"></i>
                 </div>
                 <div className='h-7 w-7 sm:h-9 sm:w-9 bg-slate-600 flex center rounded-full cursor-pointer'> 
                 <i className="fa-solid fa-gear text-ternary"></i>
                 </div>
                 <div className='h-7 w-7 sm:h-9 sm:w-9 bg-slate-600 flex center rounded-full cursor-pointer'> 
                 <i className="fa-solid fa-bell text-ternary"></i>
                 </div>
                 <div className='h-7 w-7 sm:h-9 sm:w-9 bg-slate-600 flex center rounded-full cursor-pointer overflow-hidden'> 
                     <img src='https://drkaranhospital.com/wp-content/uploads/2021/02/user.png' alt='user-profile' className=''></img>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Header