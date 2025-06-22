import { useState } from 'react';

import VerticalLayoutImg from '../assets/images/pre-defined-layout-img/vertical.png';
import BorderedLayoutImg from '../assets/images/pre-defined-layout-img/bordered.png';
import SemiDarkLayoutImg from '../assets/images/pre-defined-layout-img/semi-dark.png';
import DarkLayoutImg from '../assets/images/pre-defined-layout-img/dark.png';
import HorizontalLayoutImg from '../assets/images/pre-defined-layout-img/horizontal.png';
import HorizontalDarkLayoutImg from '../assets/images/pre-defined-layout-img/horizontal-dark.png';

export default function PredefinedLayout() {
      const [hoveredCard, setHoveredCard] = useState(null);
  
 const predefinedLayouts = [
  {
    title: "Vertical Layout",
    img: VerticalLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/vertical-layout"
  },
  {
    title: "Bordered Layout",
    img: BorderedLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/bordered-layout"
  },
  {
    title: "Semi Dark Layout",
    img: SemiDarkLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/semi-dark-layout"
  },
  {
    title: "Dark Layout",
    img: DarkLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/dark-layout"
  },
  {
    title: "Horizontal Layout",
    img: HorizontalLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/horizontal-layout"
  },
  {
    title: "Horizontal Dark Layout",
    img: HorizontalDarkLayoutImg,
    demoUrl: "https://demo.your-site.com/layouts/horizontal-dark-layout"
  }
];
  
      return (
          <section className="  bg-[#F7F6F9]">
              <div className='container mx-auto py-14 w-[95%]'>
                  <style jsx global>{`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
          }
          .btn-hover:hover {
            background-color: #7014F2;
            color: white;
            transition: all 0.3s ease;
          }
        `}</style>
  
  
                 <div className="text-center mb-12">
                   <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full mx-auto">
                          Pre-defined <span className="text-[#7014F2]">layout options</span> to suit any taste
                      </h2>
                      <p className="text-[#8C8C8C] w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
                        <span className="text-gray-900">Vuexy VueJS Admin Template</span> also offers Layout options for building <span className="text-gray-900">next-generation web applications</span> that follow the latest trends in web design and user experience.
                      </p>
                       
                 </div>
                  
      
                  <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                      {predefinedLayouts.map((app, index) => (
                          <div
                              key={index}
                              className={`bg-[#EEE3FF] rounded-lg px-2 md:px-4 pt-4 pb-2 card-hover transition-all duration-300 ${hoveredCard === index ? 'shadow-lg' : ''}`}
                              onMouseEnter={() => setHoveredCard(index)}
                              onMouseLeave={() => setHoveredCard(null)}
                          >
                              <div className="flex justify-between items-center mb-4">
                                  <h3 className="font-semibold text-base md:text-lg">{app.title}</h3>
                                  <a
                                      href={app.demoUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-[#E5D7FA] text-[#7014F2] px-2 md:px-3 py-2 rounded-md text-xs md:text-sm btn-hover hover:no-underline"
                                  >
                                      Live Demo
                                  </a>
                              </div>
                              <div className="overflow-hidden rounded-md">
                                  <img
                                      src={app.img}
                                      alt={app.title}
                                      className={`w-full h-auto transition-all duration-500 `}
                                      placeholder="blur"
                                  />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
  
             
  
          </section>
      );
}
