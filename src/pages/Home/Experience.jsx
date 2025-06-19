import React from "react";
import { FaUsers, FaHandshake, FaTicketAlt, FaStar } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-purple-100 min-h-screen ">
        <h1 className="mt-10 text-4xl font-bold">
          <span className="text-purple-500">11 years</span> of Experience
        </h1>
        
        {/* Animated Image */}
        <div className="animate-bounce-slow w-[500px] mt-14">
          <img
            src="https://i.ibb.co/F4vVtrjH/expericence.png"
            alt="Experience illustration"
            className="w-full"
          />
        </div>
        
        {/* Compact Cards Section */}
        <div className="flex gap-4 justify-center items-center flex-wrap mt-14 px-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-36 text-center hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
              <FaUsers className="text-purple-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">10M+</h1>
            <p className="text-sm text-gray-600 mt-1">End Users</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-36 text-center hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
              <FaHandshake className="text-purple-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">20K+</h1>
            <p className="text-sm text-gray-600 mt-1">Trust Vuexy</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-36 text-center hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
              <FaTicketAlt className="text-purple-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">5K+</h1>
            <p className="text-sm text-gray-600 mt-1">Tickets</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-36 text-center hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
              <FaStar className="text-yellow-400 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">600+</h1>
            <p className="text-sm text-gray-600 mt-1">5★ Reviews</p>
          </div>
        </div>
        
        {/* Bottom Image */}
        <div className="mt-16">
          <img 
            className="w-[1000px] max-w-full" 
            src="https://i.ibb.co/N4JT3bg/frame-removebg-preview.png" 
            alt="Achievement frame" 
          />
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Experience;