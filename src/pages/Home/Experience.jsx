import React from "react";
import { FaUsers, FaHandshake, FaTicketAlt, FaStar } from "react-icons/fa";
import banner from "../../assets/images/banner/Screenshot 2025-06-22 110128.png";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-purple-100 min-h-screen px-4 ">
      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
  <span className="text-purple-500">11 years</span> of Experience
</h1>
<p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
  Over a decade of expertise delivering innovative solutions and exceptional results across diverse industries. 
  Our seasoned professionals bring deep knowledge and proven methodologies to every project.
</p>
        {/* Animated Image */}
     <div className="animate-bounce-slow w-full px-4 sm:px-0 mx-auto mt-8 md:mt-12">
  <img
    src="https://i.ibb.co/F4vVtrjH/expericence.png"
    alt="Experience illustration"
    className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto mx-auto"
  />
</div>

       
       {/* Compact Cards Section */}
<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 md:mt-12 px-2 sm:px-4">
  {/* Card 1 */}
  <div className="p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-[45%] sm:w-36 md:w-36 text-center hover:-translate-y-1">
    <div className="bg-purple-200 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
      <FaUsers className="text-purple-600 text-lg sm:text-xl" />
    </div>
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">10M+</h1>
    <p className="text-xs sm:text-sm text-gray-600 mt-1">End Users</p>
  </div>

  {/* Card 2 */}
  <div className="p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-[45%] sm:w-36 md:w-36 text-center hover:-translate-y-1">
    <div className="bg-purple-200 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
      <FaHandshake className="text-purple-600 text-lg sm:text-xl" />
    </div>
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">20K+</h1>
    <p className="text-xs sm:text-sm text-gray-600 mt-1">Trust Vuexy</p>
  </div>

  {/* Card 3 */}
  <div className="p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-[45%] sm:w-36 md:w-36 text-center hover:-translate-y-1">
    <div className="bg-purple-200 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
      <FaTicketAlt className="text-purple-600 text-lg sm:text-xl" />
    </div>
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">5K+</h1>
    <p className="text-xs sm:text-sm text-gray-600 mt-1">Tickets</p>
  </div>

  {/* Card 4 */}
  <div className="p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-[45%] sm:w-36 md:w-36 text-center hover:-translate-y-1">
    <div className="bg-purple-200 w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3">
      <FaStar className="text-yellow-400 text-lg sm:text-xl" />
    </div>
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">600+</h1>
    <p className="text-xs sm:text-sm text-gray-600 mt-1">5★ Reviews</p>
  </div>
</div>

        {/* Bottom Image */}
        <div className="mt-10 md:mt-16 w-full max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px] flex justify-center">
          <img
            className="w-[600px] rounded-lg h-auto"
            src={banner}
            alt="Achievement frame"
          />
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
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
