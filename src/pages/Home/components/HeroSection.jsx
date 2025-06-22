import React from "react";
import { Star } from "lucide-react";
import novaDashImg from "../../../assets/images/dashboard/nova-d1.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { number: "10M+", label: "End Users" },
    { number: "20K+", label: "Trust Vuexy" },
    { number: "5,000+", label: "Resolved Tickets" },
    { number: "600+", label: "5 ⭐ Reviews" },
  ];

  // const technologies = [
  //   {
  //     name: "HTML",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "Vue 3",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "NuxtJS",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "NextJS 15",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "Laravel",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "Vue + Laravel",
  //     image: null, // We'll handle this specially
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: ".Net Core",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "Django",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  //     color: "text-gray-700",
  //   },
  //   {
  //     name: "Figma",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  //     color: "text-gray-700",
  //   },
  // ];

  const technologies = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      color: "text-gray-700",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      color: "text-gray-700",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Tailwind",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "text-gray-700",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Next JS 15",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Redux",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      color: "text-gray-700",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      color: "text-gray-700",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      color: "text-gray-700",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      color: "text-gray-700",
    },
  ];

  return (
    <div className="relative lg:pb-36">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50  flex items-center  justify-center p-4 sm:p-6 lg:p-8 lg:pb-32">
        <div className=" w-full grid lg:pt-14 grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 order-2 lg:order-1 mt-5 ">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:justify-items-start lg:max-w-2xl">
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
          <Link
            to="https://dashboard1-n4muj8rws-sumonrahman24s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <img
              src={novaDashImg}
              alt="Dashboard"
              className="w-full  h-auto  hover:border border-purple-600 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-md"
            />
          </Link>
        </div>
      </div>

      {/* Tech Section - Properly Positioned */}
      <div className="relative z-10 flex justify-center">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mt-8 lg:mt-0 lg:absolute -top-[70px] w-full max-w-5xl mx-4 sm:mx-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 group cursor-pointer transform transition-all duration-300 hover:scale-110"
              >
                <div className="flex items-center justify-center w-12 h-12 group-hover:bg-gray-50 rounded-lg transition-all duration-300">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium ${tech.color} group-hover:text-purple-600 transition-colors duration-300`}
                >
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
