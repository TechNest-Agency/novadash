import React from 'react';

const GithubRepo = () => {
    return (
        <div className=" flex items-center justify-center ">
            <div className="max-w-8xl w-full bg-purple-100/40 border  rounded-lg  p-6 flex flex-col md:flex-row items-center text-center md:text-left">
                {/* Image Section */}
                <div className="mb-6 md:mb-0 md:mr-6">
                    <img
                        src="https://i.ibb.co/nNWvpyDG/githubimg.png"
                        alt="Developer with laptop"
                        className="w-[700px] h-auto mx-auto md:mx-0"
                    />
                </div>

                {/* Text and Button Section */}
                <div>
                   
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Github Repository Access</h2>
                    <p className="text-gray-600 w-[800px] mb-6 text-sm">
                        As a developer, there is nothing better than getting GitHub Repo access. Get all the latest changes, new features, and bug fixes without waiting for the next release on the platform. Raise a join request by filling up the repository access form by clicking the following button.
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                        Let's Connect on GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GithubRepo;