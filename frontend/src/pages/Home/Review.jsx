import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import local company logo files
import squizLogo from '../../assets/images/Logos/1stone.png';
import olemissLogo from '../../assets/images/Logos/secondone.png';
import sensearenaLogo from '../../assets/images/Logos/3rdone.png';
import umichLogo from '../../assets/images/Logos/4thone.png';
import betterLogo from '../../assets/images/Logos/5thone.png';
import setterLogo from '../../assets/images/Logos/6htone.png';

const Review = () => {
  const userImages = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
    'https://randomuser.me/api/portraits/women/63.jpg',
    'https://randomuser.me/api/portraits/men/55.jpg',
  ];

  const companyLogos = [
    { name: 'SQUIZ', logo: squizLogo },
    { name: 'University of Mississippi', logo: olemissLogo },
    { name: 'Sense Arena', logo: sensearenaLogo },
    { name: 'University of Michigan', logo: umichLogo },
    { name: 'Better. agency', logo: betterLogo },
    { name: 'SETTER', logo: setterLogo },
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
    {
      rating: 'Well Done!',
      text: 'The design kit was both powerful and easy to implement. We appreciated the seamless integration.',
      name: 'Tina Setters',
      title: 'SETTER',
      img: userImages[0],
    },
    {
      rating: 'Great Work!',
      text: 'The UI components were intuitive and well-structured, making our workflow efficient.',
      name: 'Gina Cacs',
      title: 'GCACS',
      img: userImages[1],
    },
    {
      rating: 'Excellent Design!',
      text: 'The kit provided a smooth and cohesive user experience with minimal effort.',
      name: 'Tom Tevod',
      title: 'Tevod',
      img: userImages[2],
    },
  ];


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto mb-6">
          See what our customers have to say about their experience with our products.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {companyLogos.map((company, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-16 sm:max-h-20 object-contain"
                />
              </div>
              <span className="mt-2 text-xs text-gray-600 text-center max-w-[100px] truncate">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6 sm:my-8"></div>

      {/* Mobile/Tablet: Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:hidden">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex-grow">
              <div className="flex justify-center items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-0.5" />
                ))}
                <span className="ml-2 font-medium text-purple-600 text-sm">
                  {review.rating}
                </span>
              </div>
              <FaQuoteLeft className="text-gray-300 text-xl mb-4 mx-auto" />
              <p className="text-gray-700 mb-5 text-sm line-clamp-4 min-h-[80px]">
                {review.text}
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex items-center justify-center">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div className="text-left">
                  <h4 className="font-medium text-gray-800 text-sm">{review.name}</h4>
                  <span className="text-xs text-purple-700">{review.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Slider Layout */}
      <div className="hidden md:block">
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-3 h-full">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mx-0.5" />
                    ))}
                    <span className="ml-2 font-medium text-purple-600">
                      {review.rating}
                    </span>
                  </div>
                  <FaQuoteLeft className="text-gray-300 text-2xl mb-5 mx-auto" />
                  <p className="text-gray-700 mb-6 text-base line-clamp-4 min-h-[100px]">
                    {review.text}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-center">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-medium text-gray-800">{review.name}</h4>
                      <span className="text-sm text-purple-700">{review.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots li button:before {
          color: #9b59b6;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Review;