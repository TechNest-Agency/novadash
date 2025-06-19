import documentation from '../assets/images/front-page-img/document.png';

const Documentation = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full  bg-gradient-to-r from-white from-30% to-purple-100/40 to-70%  border rounded-lg p-6 flex flex-col lg:flex-row items-center text-center lg:text-left">
                {/* Image Section - Fixed 350px dimensions for large screens */}
                <div className="mb-6 lg:mb-0 lg:mr-6 lg:w-1/3 flex justify-center">
                    <img
                        src={documentation}
                        alt="documentation"
                        className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] object-contain"
                    />
                </div>

                {/* Text and Button Section */}
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Documentation</h2>
                    <p className="text-gray-600 lg:w-[90%] mb-6 text-sm w-[95%] sm:w-[90%] ">
                        Documentation provides a basic understanding of how our template works and how you can tweak it, so we highly recommend you first read our guide and then start working on your project using our template.
                    </p>
                    <button 
                        className="bg-[#7014F2] text-white px-8 py-3 rounded-lg hover:bg-[#5a10c9] transition duration-300 text-lg font-medium "
                        
                    >
                        Tap to Read
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Documentation;