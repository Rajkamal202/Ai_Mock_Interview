"use client"
import { db } from '@/utils/db'
import { userAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(userAnswer)
      .where(eq(userAnswer.mockIdRef, params.interviewid))
      .orderBy(userAnswer.id);
    console.log(result);
    setFeedbackList(result);
  }

  return (
    <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl m-7 transform transition-transform duration-500 hover:scale-105">
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4 animate-pulse">Congratulations!</h2>
        <h2 className="font-bold text-3xl text-gray-900 mb-6 animate-bounce">Here is your interview feedback</h2>
        <h2 className="text-purple-800 text-lg my-3">
          Your overall interview rating: <strong className="text-purple-900">7/10</strong>
        </h2>
        <p className="text-md text-gray-700 mt-4">
          Find below the interview questions with correct answers, your answers, and feedback for improvement.
        </p>
      </div>
      {feedbackList && feedbackList.map((item, index) => (
        <Collapsible key={index} className="mt-7">
          <CollapsibleTrigger className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg my-2 text-left flex justify-between gap-7 w-full text-white hover:bg-gradient-to-l transform transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
            {item.question} <ChevronsUpDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden transition-all duration-500">
            <div className="flex flex-col gap-3 p-4 border rounded-lg bg-white shadow-lg">
              <h2 className="text-red-500 p-2 border rounded-lg animate-pulse">
                <strong>Rating:</strong> {item.rating}
              </h2>
              <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900 shadow-inner">
                <strong>Your Answer:</strong> {item.userAns}
              </h2>
              <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900 shadow-inner">
                <strong>Correct Answer:</strong> {item.correctAns}
              </h2>
              <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900 shadow-inner">
                <strong>Feedback:</strong> {item.feedback}
              </h2>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      <Button onClick={() => router.replace('/dashboard')} className="mt-10 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50">
        Go Home
      </Button>
    </div>
  )
}

export default Feedback;
