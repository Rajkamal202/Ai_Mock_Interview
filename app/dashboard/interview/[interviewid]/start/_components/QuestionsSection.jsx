"use client"
import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  

  
  const textToSpeach=(text)=>{
    if('speechSynthesis' in window){
        const speech=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
    }
    else{
        alert('Sorry, Your browser does not support text to speech')
    }
}

  return (
    mockInterviewQuestion && (
      <div className='p-6 border rounded-xl shadow-lg bg-white my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {mockInterviewQuestion.map((question, index) => (
            <h2
              className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer transition-all duration-300 ease-in-out 
              ${activeQuestionIndex === index ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-800 hover:shadow-lg hover:text-white'}
              `}
              key={index}

            >
              Question #{index + 1}
            </h2>
          ))}
        </div>
        <h2 className='my-5 text-md md:text-lg font-semibold text-gray-800 transition-colors duration-300'>
          {mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
          <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
        
        <div className='border rounded-xl p-5 bg-blue-50 mt-10 shadow-sm'>
          <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className='text-sm font-light text-gray-900 my-2'>
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;


