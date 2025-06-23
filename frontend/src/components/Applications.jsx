import { useState } from 'react';


// Import all images
import EmailAppImg from '../assets/images/applications-img/email-app.png';
import ChatAppImg from '../assets/images/applications-img/chat-app.png';
import CalendarAppImg from '../assets/images/applications-img/calendar-app.png';
import ECommerceImg from '../assets/images/applications-img/ecommerce.png';
import RolesAppImg from '../assets/images/applications-img/roles-app.png';
import InvoiceAppImg from '../assets/images/applications-img/invoice.png';
import LogisticsImg from '../assets/images/applications-img/logistics.png';
import KanbanAppImg from '../assets/images/applications-img/kanban-app.png';
import AcademyImg from '../assets/images/applications-img/academy.png';

const Applications = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const applications = [
        {
            title: "Email App",
            img: EmailAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/email"
        },
        {
            title: "Chat App",
            img: ChatAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/chat"
        },
        {
            title: "Calendar App",
            img: CalendarAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/calendar"
        },
        {
            title: "E-Commerce",
            img: ECommerceImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/ecommerce"
        },
        {
            title: "Roles & Permission",
            img: RolesAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/roles"
        },
        {
            title: "Invoice App",
            img: InvoiceAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/invoice"
        },
        {
            title: "Logistics",
            img: LogisticsImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/logistics"
        },
        {
            title: "Kanban App",
            img: KanbanAppImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/kanban"
        },
        {
            title: "Academy",
            img: AcademyImg,
            demoUrl: "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/apps/academy"
        },
    ];

    return (
        <section className=" mx-auto bg-[#F7F6F9]">
            <div className='container mx-auto py-12 w-[95%]'>
         
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full mx-auto">
                        Stunning <span className="text-[#7014F2]">Applications</span>
                    </h2>
                    <p className="text-[#8C8C8C] w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
                        Vuexy VueJS Admin Template additionally provides <span className="text-gray-900">9 different applications</span> which enable you to
                        get started and build your applications faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    {applications.map((app, index) => (
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
                                    className={`w-full h-auto transition-all duration-500 ${hoveredCard === index ? 'scale-105' : ''}`}
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    ))}
                </div>

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
          transform: translateY(-8px);
          transition: transform 0.3s ease;
        }
        .btn-hover:hover {
          background-color: #7014F2;
          color: white;
          transition: all 0.3s ease;
        }
      `}</style>

            </div>

        </section>
    );
};

export default Applications;