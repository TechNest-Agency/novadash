import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Review = () => {
   
    const userImages = [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    ];

    const reviews = [
        {
            rating: "Excellent",
            text: "Clean code structure and perfectly aligned UI elements. Component-based design made integration effortless. Handoff was smooth — zero guesswork needed.",
            name: "Jary Synsi",
            title: "SEASE ARENA",
            img: userImages[0]
        },
        {
            rating: "Wow! Great Job",
            text: "The Mail Dashboard UI Sara created is both powerful and easy to use. We loved how she balanced functionality with simplicity — every component felt intuitive.",
            name: "Sant Fernandez",
            title: "VERIFIED BUYER",
            img: userImages[1]
        },
        {
            rating: "Well Designed!",
            text: "The UI kit is clean, consistent, and easy to use. It helped speed up our design and development process significantly. Overall, it ensured a smooth and cohesive user experience.",
            name: "Sami Fernandez",
            title: "VERIFIED BUYER",
            img: userImages[2]
        },
        {
            rating: "Amazing Quality",
            text: "The attention to detail is incredible. Every component works exactly as described and the documentation is thorough.",
            name: "Alex Johnson",
            title: "TECH CORP",
            img: userImages[3]
        },
        {
            rating: "Perfect Implementation",
            text: "Saved us weeks of development time. The design system is so comprehensive we barely needed to customize anything.",
            name: "Maria Garcia",
            title: "DIGITAL SOLUTIONS",
            img: userImages[4]
        }
    ];


    const marqueeReviews = [...reviews, ...reviews];

    return (
        <div className="max-w-8xl mx-auto px-4 py-12 sm:px-6  bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Real <span className='text-purple-500'>Customers </span>Reviews</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    See what our customers have to say about their experience with our products.
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Marquee Container for larger screens */}
            <div className="relative overflow-hidden py-6 hidden md:block">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative">
                    <div className="animate-marquee whitespace-nowrap">
                        {marqueeReviews.map((review, index) => (
                            <div key={index} className="inline-block mx-4 w-80">
                                <div className="bg-white p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow text-center h-full">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                        <span className="ml-2 font-medium text-purple-600">{review.rating}</span>
                                    </div>
                                    <FaQuoteLeft className="text-gray-300 text-2xl mb-4 mx-auto" />
                                    <p className="text-gray-700 mb-6 text-sm line-clamp-4">
                                        {review.text}
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={review.img}
                                            alt={review.name}
                                            className="w-10 h-10 rounded-full mr-4 object-cover"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-medium text-gray-800">{review.name}</h4>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                {review.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        
            {/*css */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                    display: inline-block;
                }
                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Review;