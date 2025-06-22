import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick'; // Assuming you install react-slick: npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
  const userImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
  ];

  const reviews = [
    {
      rating: 'Excellent!',
      text: 'Clean code structure and perfectly aligned UI elements. Component-based design made integration effortless. Handoff was smooth — zero guesswork needed.',
      name: 'Jary Synsi',
      title: 'SQUIZ',
      img: userImages[0],
    },
    {
      rating: 'Wow! Great Job',
      text: 'The Mail Dashboard UI Sara created is both powerful and easy to use. We loved how she balanced functionality with simplicity — every component felt intuitive.',
      name: 'Sant Fernandez',
      title: 'University of Mississippi',
      img: userImages[1],
    },
    {
      rating: 'Well Designed!',
      text: 'The UI kit is clean, consistent, and easy to use. It helped speed up our design and development process significantly. Overall, it ensured a smooth and cohesive user experience.',
      name: 'Sami Fernandez',
      title: 'Sense Arena',
      img: userImages[2],
    },
    {
      rating: 'Pleasant Experience',
      text: 'The fit is close, breathable and cling, allows if needed to move freely. Overall, it ensured a smooth and cohesive user experience.',
      name: 'Emi Opent',
      title: 'University of Michigan',
      img: userImages[3],
    },
    {
      rating: 'Perfect Card Fit',
      text: 'The card fits in the slot with a tight fit, allows if needed to move freely. Overall, it ensured a smooth and cohesive user experience.',
      name: 'Geert Reusmber',
      title: 'Better. agency',
      img: userImages[4],
    },
  ];

  const sliderSettings = {
    dots: true, // Enable dots for pagination
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // 3 seconds per slide
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Real <span className="text-purple-500">Customers </span>Reviews
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          See what our customers have to say about their experience with our products.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6 sm:my-8"></div>

      {/* Mobile/Tablet: Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:hidden">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm sm:text-base" />
              ))}
              <span className="ml-2 font-medium text-purple-600 text-sm sm:text-base">
                {review.rating}
              </span>
            </div>
            <FaQuoteLeft className="text-gray-300 text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto" />
            <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm line-clamp-4">
              {review.text}
            </p>
            <div className="flex items-center justify-center">
              <img
                src={review.img}
                alt={review.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 sm:mr-4 object-cover"
              />
              <div className="text-left">
                <h4 className="font-medium text-gray-800 text-sm sm:text-base">{review.name}</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs sm:text-xs font-medium bg-purple-100 text-purple-800">
                  {review.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Slider Layout */}
      <div className="relative overflow-hidden py-6 hidden md:block">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2 sm:px-3 lg:px-4">
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow text-center h-full">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-base sm:text-lg" />
                    ))}
                    <span className="ml-2 font-medium text-purple-600 text-sm sm:text-base">
                      {review.rating}
                    </span>
                  </div>
                  <FaQuoteLeft className="text-gray-300 text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto" />
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base line-clamp-4">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-medium text-gray-800 text-sm sm:text-base">
                        {review.name}
                      </h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {review.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom CSS for invisible pagination dots */}
      <style jsx global>{`
        .slick-dots {
          bottom: -25px; /* Move dots below the slider */
        }
        .slick-dots li button:before {
          color: #9b59b6; /* Purple color for active dot */
          opacity: 0.5; /* Make dots less prominent */
          font-size: 10px; /* Smaller dots */
        }
        .slick-dots li.slick-active button:before {
          opacity: 1; /* Full opacity for active dot */
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