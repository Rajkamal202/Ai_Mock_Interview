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
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6 animate-fade-in-up">
              Prepare for Your Interview with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-200">
              Get personalized mock interviews powered by AI. Practice with real-time feedback and improve your chances of success.
            </p>
            <a href="dashboard">
              <Button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110 animate-bounce-in">
                Start Your Mock Interview
              </Button>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="/hero.jpg" 
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

