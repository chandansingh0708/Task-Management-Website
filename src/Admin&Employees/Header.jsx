import React from 'react'
import Logo from '../Logo/Logo'

export default function Header(props) {
  const { allData, handleLogout } = props;
  return (
    <div className='flex flex-col gap-y-6 md:flex-row justify-between items-center bg-gray-900 py-4 px-4 md:px- relative' >
      <div className="Logo mb-4 md:mb-0 md:mr-6">
        <Logo />
      </div>

      <h1 className='flex  w-full justify-center items-center mt-2 text-white text-sm font-[700] capitalize absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-lg'>
        <p className='heart-beat '>💗</p>Welcome!! {allData.firstName}
      </h1>

      <button
        className="bg-[#EC4899] mt-2 hover:bg-[#F92F60] text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105 md:ml-6"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
