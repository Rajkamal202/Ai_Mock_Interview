"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'


function AddNewInterview() {
    const [openDailog, setOpenDailog]= useState(false)
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading,setLoading]=useState(false);
    const [JsonResponse, setJsonResponse] = useState([]);
    const router=useRouter();

    const {user}=useUser();

    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault( )
        console.log(jobDesc, jobExperience, jobPosition)

        const InputPrompt="Job Position: "+jobPosition+", Job Desription:"+jobDesc+" Years of Experience:"+jobExperience+", Depends on Job Position, Job Descripiton & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" intereview question along with answer in JSON format, give us question and answer field on JSON"
        const result=await chatSession.sendMessage(InputPrompt);
        const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);
        if(MockJsonResp)
            {
        const resp=await db.insert(MockInterview)
        .values ({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobEeperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId});

        console.log("Inserted ID", resp)
    
    if (resp)
    {
        setOpenDailog(false)
        router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
}
    else{
        console.log("ERROR")
    }


        setLoading(false);

    }
    
    
      
  return (
    <div>
      <div className="p-10 border rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 hover:shadow-2xl cursor-pointer transition-all transform duration-500 ease-in-out"
      onClick={() => setOpenDailog(true)}
      >
        <h2 className='font-bold text-lg text-nowrap text-center text-white'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
     <DialogContent className="max-w-2xl">
     <DialogHeader>
      <DialogTitle className="text-2xl text-indigo-700">Tell us more about your job interviwing</DialogTitle>
      <DialogDescription>
      <form onSubmit={onSubmit}>
        <div>
            <h2>Add Details about your job position/role,Job description and year of experiance.</h2>

            <div className='my-4'>
                <label >Job Role/Job position</label>
                    <Input className='mt-2' placeholder="Ex. Full Stack Developer" required
                        onChange={(event)=>setJobPosition (event.target.value)}
                    />
        
            </div>
            <div className='my-4'>
                <label>Job Description / Skill (In Short) </label>
                    <Textarea className='mt-2' placeholder="Ex. React, Javascript, Java, NodeJs etc." required
                        onChange={(event)=>setJobDesc (event.target.value)}
                    />
                
            </div>
            <div className='my-4'>
                <label> Years of Experiance</label>
                    <Input className='mt-2' placeholder="Ex.3" type="number" max="100" required
                        onChange={(event)=>setJobExperience (event.target.value)}
                    />
            </div>
        </div>
        <div className='flex gap-5 justify-end' >
            <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
            <Button type="submit" disabled={loading} className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            {loading? 
            <>
            <LoaderCircle className='animate-spin'/>'Generating from AI'
            </>:'Start Interview'
            
            }
            </Button>
        </div>
        </form>
      </DialogDescription>

      </DialogHeader>
      </DialogContent>
      </Dialog>

    </div>
    
  )
}

export default AddNewInterview;



// className="p-10 border rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 hover:shadow-2xl cursor-pointer transition-all transform duration-500 ease-in-out"
// className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
// className="text-2xl text-indigo-700"