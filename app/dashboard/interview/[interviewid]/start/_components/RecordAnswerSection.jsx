"use client";
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { Mic } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import Webcam from 'react-webcam';
import { userAnswer as UserAnswer } from '@/utils/schema';
import { toast } from 'sonner';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false
  });

  useEffect(() => {
    results?.forEach((result) => {
      setUserAnswer(prevAns => prevAns + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer();
    }
  }, [isRecording]);

  const StartStopRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  }

  const UpdateUserAnswer = async () => {
    if (!interviewData?.mockId) {
      toast.error('Interview data is not available');
      return;
    }

    console.log(userAnswer);
    setLoading(true);

    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. Based on the question and user answer, please give a rating for the answer and feedback on areas of improvement (if any) in JSON format with rating and feedback fields.`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = (await result.response.text()).replace('```json', '').replace('```', '');
      const JsonFeedbackResp = JSON.parse(mockJsonResp);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
      });

      if (resp) {
        toast.success('User Answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error('Failed to record user answer');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex justify-center items-center flex-col min-h-screen py-10'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg p-6 relative shadow-xl border border-gray-200'>
        <Image
          src={'/Webcam.png'}
          width={200}
          height={200}
          className='absolute z-0 opacity-20'
          alt='Webcam Background'
        />
        <Webcam
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
            borderRadius: '0.5rem',
          }}
          className='hover:scale-105 transition-transform duration-300 ease-in-out'
        />
      </div>
      <button
        disabled={loading}
        className={`mt-10 font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 mb-10 text-white
          ${isRecording ? 'bg-red-600 animate-pulse' : 'bg-gradient-to-r from-green-600 to-teal-600'}
          ${!loading && !isRecording ? 'hover:shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-teal-300 focus:ring-opacity-50' : ''}
          ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <div className='flex items-center'>
            <Mic className='mr-2 animate-pulse' /> <span>Stop Recording...</span>
          </div>
        ) : (
          "Record My Answer"
        )}
      </button>
    </div>
  );
}

export default RecordAnswerSection;




