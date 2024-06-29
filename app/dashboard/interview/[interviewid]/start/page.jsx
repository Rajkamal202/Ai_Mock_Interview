"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import Link from 'next/link';

function StartInterview({params}) {

    const [interviewData, setInterviewData]=useState()
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState()
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewDetails();

    },[]);

      
     //Used to Get Interview Details by MockId/Interview Id
     
     const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewid))
        const jsonMockResp=JSON.parse(result[0].jsonMockResp);
        console.log(jsonMockResp)

        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
    }   
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
    {/* {Questions} */}
    <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
    />
    {/* {Video and AudioRecording} */}
    <RecordAnswerSection
    mockInterviewQuestion={mockInterviewQuestion}
    activeQuestionIndex={activeQuestionIndex}
    interviewData={interviewData}
    />
    </div>
    <div className='flex justify-end gap-6 m-7'>
  {activeQuestionIndex > 0 && (
    <button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)} className='bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50'>
      Previous Question
    </button>
  )}
  <button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className='bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50'>
    Next Question
  </button>
  {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
    <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
    <button className='bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50'>
      End Interview
    </button>
    </Link>
  )}
</div>
    </div>
  )
}

export default StartInterview
