import React from 'react';

const GithubRepo = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="max-w-7xl w-full bg-purple-100/40 border rounded-lg p-4 sm:p-6 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
          <img
                        src="https://i.ibb.co/nNWvpyDG/githubimg.png"
            alt="Developer with laptop"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Github Repository Access
          </h2>
          <p className="text-gray-600 text-sm sm:text-base w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] mb-6">
            As a developer, there is nothing better than getting GitHub Repo access. Get all the latest changes, new features, and bug fixes without waiting for the next release on the platform. Raise a join request by filling up the repository access form by clicking the following button.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-purple-700 transition duration-300 text-sm sm:text-base">
            Let's Connect on GitHub
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        button:focus {
          outline: 2px solid purple;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default GithubRepo;