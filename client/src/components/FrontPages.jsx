import { useState } from "react";
import CheckoutPageImg from "../assets/images/front-page-img/checkout.png";
import HelpCenterImg from "../assets/images/front-page-img/help-center.png";
import PricingPageImg from "../assets/images/front-page-img/pricing.png";
import PaymentPageImg from "../assets/images/front-page-img/payment.png";
import LandingPageImg from "../assets/images/front-page-img/landing.png";
import AuthPagesImg from "../assets/images/front-page-img/auth.png";

const FrontPages = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const frontPages = [
    {
      title: "Landing",
      img: LandingPageImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/landing",
    },
    {
      title: "Payment",
      img: PaymentPageImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/payment",
    },
    {
      title: "Pricing",
      img: PricingPageImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/pricing",
    },
    {
      title: "Help Center",
      img: HelpCenterImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/help-center",
    },
    {
      title: "Checkout",
      img: CheckoutPageImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/checkout",
    },
    {
      title: "Auth Pages",
      img: AuthPagesImg,
      demoUrl:
        "https://demo.vuexy.com/vuexy-admin-template/vuejs/demo-1/front-pages/auth",
    },
  ];

  return (
    <section className="  bg-[#F7F6F9]">
      <div className="container mx-auto pt-6 pb-12 w-[95%] ">
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
            transform: translateY(-8px);
            transition: transform 0.3s ease;
          }
          .btn-hover:hover {
            background-color: #7014f2;
            color: white;
            transition: all 0.3s ease;
          }
        `}</style>

        <div className="text-center mb-12 container mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full mx-auto">
            <span className="text-[#7014F2]">Front Pages</span> that Propel Your
            Launch
          </h2>
          <p className="text-[#8C8C8C] w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
            Vuexy VueJs Admin template provides{" "}
            <span className="text-gray-900">15+ front pages</span>, including a
            dedicated <span className="text-gray-900">landing page</span>
            and other{" "}
            <span className="text-gray-900">
              {" "}
              most commonly used pages,
            </span>{" "}
            saving you time and effort in launching your app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {frontPages.map((app, index) => (
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
                  className={`w-full h-auto transition-all duration-500 ${
                    hoveredCard === index ? "scale-105" : ""
                  }`}
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

export default FrontPages;
