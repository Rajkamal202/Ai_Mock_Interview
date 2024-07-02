import Image from 'next/image';
import React from 'react'


function Headers() {
  return (
    <header className="bg-gradient-to-r from-blue-200 to-white p-3 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
        <Image src='/logo.svg' width={100} height={50} alt='logo' />
        </div>
        <div>
        <nav>
          <ul className='flex gap-11 justify-center items-center ml-12'>
            <li className='text-lg font-sans border border-sold border-blue-300 rounded-3xl p-1 pl-7 pr-7 shadow-md cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-blue-800 hover:shadow-lg '>About Us</li>
            <li className='text-lg font-sans border border-sold border-blue-300 rounded-3xl p-1 pl-7 pr-7 shadow-md cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-blue-800 hover:shadow-lg '>Home</li>
            <li className='text-lg font-sans border border-sold border-blue-300 rounded-3xl p-1 pl-7 pr-7  shadow-md cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-blue-800 hover:shadow-lg '>Questions</li>
          </ul>
        </nav>
        </div>
        <nav>
          <ul className="flex space-x-4">
           
            <li>
               <a 
                 href='dashboard'
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-2xl hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                
               
                Get Started
                </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Headers;
