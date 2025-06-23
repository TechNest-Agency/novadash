import { useState } from "react";

import CreateDealImg from "../assets/images/useful-img/create-deal.png";
import UserProfileImg from "../assets/images/useful-img/user.png";
import FAQImg from "../assets/images/useful-img/faq.png";
import BillingPlansImg from "../assets/images/useful-img/billing.png";
import AccountSettingsImg from "../assets/images/useful-img/account.png";
import PricingImg from "../assets/images/useful-img/pricing.png";

const Useful = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const usefulPages = [
    {
      title: "Create Deal",
      img: CreateDealImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/create-deal",
    },
    {
      title: "User Profile",
      img: UserProfileImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/user-profile",
    },
    {
      title: "FAQ",
      img: FAQImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/faq",
    },
    {
      title: "Account Settings",
      img: AccountSettingsImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/account-settings",
    },
    {
      title: "Pricing",
      img: PricingImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/pricing",
    },
    {
      title: "Billing & Plans",
      img: BillingPlansImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/pages/billing-plans",
    },
  ];

  return (
    <section className="  bg-[#F7F6F9]">
      <div className="container mx-auto py-12 w-[95%]">
        <style jsx global>{`
          @keyframes bounce-slow {
            0%,
            100% {
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
            background-color: #7014f2;
            color: white;
            transition: all 0.3s ease;
          }
        `}</style>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full mx-auto">
            Useful <span className="text-[#7014F2]">Pages</span>
          </h2>
          <p className="text-[#8C8C8C] w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
            Vuexy VueJS Admin Template provides{" "}
            <span className="text-gray-900">30+ pages.</span> Besides, it also
            contains all the commonly used pages to develop any applications
            which will{" "}
            <span className="text-gray-900">
              ease the developer's guide efforts.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {usefulPages.map((app, index) => (
            <div
              key={index}
              className={`bg-[#EEE3FF] rounded-lg px-2 md:px-4 pt-4 pb-2 card-hover transition-all duration-300 ${
                hoveredCard === index ? "shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-base md:text-lg">
                  {app.title}
                </h3>
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
};

export default Useful;
