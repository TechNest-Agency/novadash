import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Settings,
  Gem,
  FileText,
  Box,
} from "lucide-react";

const WhyBuyNova = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reasons = [
    [
      {
        icon: <Gem className="w-6 h-6 text-purple-500" />,
        title: "Framework Focused",
        description:
          "Reliable framework offers production-ready components and packages",
      },
      {
        icon: <Star className="w-6 h-6 text-purple-500" />,
        title: "Best Framework",
        description:
          "Vuexy uses the best framework for each specific need, ensuring flexible solution",
      },
      {
        icon: <Settings className="w-6 h-6 text-purple-500" />,
        title: "Customize with Ease",
        description: "Customizable layout and design to suit specific needs",
      },
      {
        icon: <FileText className="w-6 h-6 text-purple-500" />,
        title: "Feature rich components",
        description: "Vuexy admin template offers production-ready components",
      },
    ],
    [
      {
        icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
        title: "Developer Friendly",
        description:
          "Clean code structure with comprehensive documentation for easy development",
      },
      {
        icon: <Star className="w-6 h-6 text-purple-500" />,
        title: "Regular Updates",
        description:
          "Continuous updates and improvements to keep your project up-to-date",
      },
      {
        icon: <Settings className="w-6 h-6 text-purple-500" />,
        title: "Premium Support",
        description:
          "Dedicated support team to help you with any questions or issues",
      },
      {
        icon: <Box className="w-6 h-6 text-purple-500" />,
        title: "Multi-Language",
        description:
          "Built-in internationalization support for global applications",
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            12 Reasons{" "}
            <span className="text-purple-600">why you should buy</span> Vuexy?
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            The most <span className="font-medium">developer friendly</span> &
            highly customizable
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Vuexy Vuejs Admin Dashboard Template in 2025
          </p>
        </div>

        {/* Cards Layout */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reasons.map((slideReasons, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  {/* Desktop Layout - Staggered wave pattern */}
                  <div className="hidden lg:block">
                    <div
                      className="relative h-96 mx-auto"
                      style={{ maxWidth: "1000px" }}
                    >
                      {/* First card - Higher position (top) */}
                      <div
                        className="absolute w-56 border border-[#7014F2] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        style={{
                          top: "0px",
                          left: "0px",
                          zIndex: 4,
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            {slideReasons[0]?.icon}
                          </div>
                          <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
                            {slideReasons[0]?.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {slideReasons[0]?.description}
                          </p>
                        </div>
                      </div>

                      {/* Second card - Lower position compared to first */}
                      <div
                        className="absolute w-56 border border-[#7014F2] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        style={{
                          top: "40px",
                          left: "240px",
                          zIndex: 3,
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            {slideReasons[1]?.icon}
                          </div>
                          <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
                            {slideReasons[1]?.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {slideReasons[1]?.description}
                          </p>
                        </div>
                      </div>

                      {/* Third card - Higher position compared to second */}
                      <div
                        className="absolute border border-[#7014F2] w-56 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        style={{
                          top: "90px",
                          left: "480px",
                          zIndex: 2,
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            {slideReasons[2]?.icon}
                          </div>
                          <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
                            {slideReasons[2]?.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {slideReasons[2]?.description}
                          </p>
                        </div>
                      </div>

                      {/* Fourth card - Lower position compared to third */}
                      <div
                        className="absolute w-56 border border-[#7014F2] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        style={{
                          top: "140px",
                          left: "720px",
                          zIndex: 1,
                        }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            {slideReasons[3]?.icon}
                          </div>
                          <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
                            {slideReasons[3]?.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {slideReasons[3]?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Tablet Layout */}
                  <div className="lg:hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {slideReasons.map((reason, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 hover:bg-purple-100 transition-colors duration-300">
                              {reason.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {reason.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end mt-16 space-x-3.5">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-lg border-2 border-[#7014F2] bg-white flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-lg bg-[#7014F2] flex items-center justify-center hover:bg-purple-700 transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyNova;
