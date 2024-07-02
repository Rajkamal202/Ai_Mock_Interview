import { Button } from "@/components/ui/button";
import Image from "next/image";
import Headers from "./dashboard/_components/Headers";

export default function Home() {
  return (
    <div>
      <Headers />
      <div className="bg-gradient-to-br bg-blue-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold from-font-blue-500 to-font-white leading-tight mb-6 animate-fade-in-up">
              
              <span className=" from-pink-500 bg-gradient-to-r via-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Prepare for Your Interview with AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-200">
              Get personalized mock interviews powered by AI. Practice with real-time feedback and improve your chances of success.
            </p>
           <div className="flex justify-center items-center h-8 w-25">

<a
  className="group flex items-center justify-center gap-2 rounded-3xl border border-blue-900 bg-blue-600 px-3 py-3 transition-colors shadow-2xl hover:bg-transparent focus:outline-none focus:ring"
  href="dashboard"
>
  <span
    className="font-medium text-white transition-colors flex text-xl group-hover:text-indigo-600  group-active:text-indigo-500"
  >
    Start You Interview
  </span>

  <span
    className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
  >
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>

           </div>
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="/hero2.png" 
              alt="Interview preparation" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-110 animate-zoom-in"
            />
          </div>
        </div>
      </div>
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-fade-in-up delay-400">
            Why Choose MockInterviewAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-600">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Real-Time Feedback</h3>
              <p className="text-gray-600">
                Receive instant feedback on your responses to help you improve and get ready for the real thing.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-800">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personalized Questions</h3>
              <p className="text-gray-600">
                Get questions tailored to your specific job role and experience level.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-1000">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Leverage the expertise of industry professionals and AI to hone your interview skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



