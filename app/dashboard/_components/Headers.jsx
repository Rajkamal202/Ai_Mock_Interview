import Image from 'next/image';
import React from 'react'


function Headers() {
  return (
    <header className="bg-gradient-to-r from-blue-200 to-white p-3 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
        <Image src='/logo.svg' width={100} height={50} alt='logo' />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <a 
                href="dashboard" 
                className="text-black hover:text-gray-700 transition-all duration-300 ease-in-out"
              >
                Sign In
              </a>
            </li>
            <li className="flex items-center">
              <a 
                href="dashboard" 
                className="text-black hover:text-gray-700 transition-all duration-300 ease-in-out"
              >
                Sign Up
              </a>
            </li>
            <li>
               <a 
                 href='dashboard'
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                
               
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
