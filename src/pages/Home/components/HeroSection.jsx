import React from "react";
import { Star } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "10M+", label: "End Users" },
    { number: "20K+", label: "Trust Vuexy" },
    { number: "5,000+", label: "Resolved Tickets" },
    { number: "600+", label: "5 ⭐ Reviews" },
  ];

  const technologies = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Vue 3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      color: "text-gray-700",
    },
    {
      name: "NuxtJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
      color: "text-gray-700",
    },
    {
      name: "NextJS 15",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Laravel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Vue + Laravel",
      image: null, // We'll handle this specially
      color: "text-gray-700",
    },
    {
      name: ".Net Core",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Django",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      color: "text-gray-700",
    },
    {
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      color: "text-gray-700",
    },
  ];

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex  items-center justify-center p-4 sm:p-6 lg:p-8 ">
        <div className="max-w-7xl w-full grid lg:pt-14 grid-cols-1 lg:grid-cols-2  lg:gap-16 items-center justify-items-center">
          {/* Left Content */}
          <div className="space-y-10 order-2 lg:order-1 mt-5">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Build Scalable, High-Performance
                </span>
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"></span>
                <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Web Applications
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed">
                Production-ready & easy to use Admin Template for Reliability
                and Customizability.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="bg-[#F5EEF9] shadow-xl rounded-lg p-4 w-full h-28 sm:w-[140px] mx-auto border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src="/src/assets/images/banner/dashboard.png"
              alt="Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* tech */}
      <div className="hidden">
        <div className="bg-[#FFF] p-8 rounded-lg shadow-2xl absolute -bottom-28 left-[470px] max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center w-10 h-10">
                  {tech.name === "Vue + Laravel" ? (
                    <div className="flex items-center space-x-1">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                        alt="Vue"
                        className="w-4 h-4"
                      />
                      <span className="text-gray-400 text-xs">+</span>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                        alt="Laravel"
                        className="w-4 h-4"
                      />
                    </div>
                  ) : (
                    <img src={tech.image} alt={tech.name} className="w-8 h-8" />
                  )}
                </div>
                <span className={`text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
