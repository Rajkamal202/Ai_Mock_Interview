import React from 'react'
import PropTypes from 'prop-types';
import Header from './_components/Header';
import { Toaster } from '@/components/ui/sonner';



function Dashboardlayout({children}) {
  return (
    <div>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      {children}
      
      </div>
  
    </div>
  )
}

//this below code is for props validation don't do anything with this or you face props validation is missing.
Dashboardlayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboardlayout

