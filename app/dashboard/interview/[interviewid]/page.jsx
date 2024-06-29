"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {

  const [interviewData,setInterviewData]=useState();
  const [webCamEnabled,setWebCamEnabled]=useState();
  useEffect(()=>{
    console.log(params.interviewid)
    GetInterviewDetails();
  },[])
  

    
     //Used to Get Interview Details by MockId/Interview Id
     
    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewid))

        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 '>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
       
        <div className='flex flex-col my-5 gap-5'>
          <div className='flex flex-col p-6 rounded-lg border border-gray-200 shadow-md gap-4 bg-white'>
        <h2 className='text-xl font-semibold'><strong>Job Role/Job Position:</strong> {interviewData?.jobPosition}</h2>
        <h2 className='text-xl font-semibold'><strong>Job Description/Tech Stack:</strong> {interviewData?.jobDesc}</h2>
        <h2 className='text-xl font-semibold'><strong>Years of Experience:</strong> {interviewData?.jobExperience}</h2>
         </div>
      <div className='p-6 border rounded-lg border-yellow-300 bg-yellow-50 shadow-sm'>
        <h2 className='flex gap-2 items-center text-yellow-600'>
          <Lightbulb className='w-6 h-6' />
          <strong>Information</strong>
        </h2>
        <p className='mt-3 text-yellow-700'>{process.env.NEXT_PUBLIC_INFORMATION}</p>
      </div>
    </div>
            <div>
           {webCamEnabled? <Webcam
           onUserMedia={()=>setWebCamEnabled(true)}
           onUserMediaError={()=>setWebCamEnabled(false)}
           mirrored={true}
            style={{
                height:300,
                width:300
            }}
           />
           :
           <>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-lg border border-transparent shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 w-full" onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</button>
            </>
           }
            </div>

            
        </div>
        <div className='flex justify-end items-end'>
            <Link href={'/dashboard/interview/'+params.interviewid+'/start'}>
            <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"  >Start Interview</button>
            </Link>
           </div>

           
    </div>
  )
}

export default Interview
