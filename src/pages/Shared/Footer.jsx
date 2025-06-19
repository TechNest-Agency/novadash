import React from "react";
import {
  Star,
  Globe,
  Code,
  Wrench,
  RefreshCw,
  Users,
  Award,
  UserPlus,
  Shield,
  FileText,
  Cookie,
  UserCheck,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const services = [
    { icon: Globe, text: "Best Web Framework" },
    { icon: Code, text: "Framework Focused" },
    { icon: Wrench, text: "Javascript Support" },
    { icon: Award, text: "Customize with Ease" },
    { icon: RefreshCw, text: "Regular updates" },
  ];

  const aboutUs = [
    { icon: Users, text: "Customer Support" },
    { icon: UserCheck, text: "Why Choose Us" },
    { icon: UserPlus, text: "Partnership Inquiries" },
    { icon: Award, text: "Register as Architect" },
    { icon: Users, text: "Our Team" },
  ];

  const privacy = [
    { icon: Shield, text: "Data Collection" },
    { icon: Cookie, text: "Cookies Policy" },
    { icon: FileText, text: "User Rights" },
  ];

  const socialIcons = [
    { icon: "facebook", bg: "bg-blue-600 hover:bg-blue-700" },
    { icon: "linkedin", bg: "bg-blue-500 hover:bg-blue-600" },
    { icon: "twitter", bg: "bg-red-500 hover:bg-red-600" },
    { icon: "youtube", bg: "bg-red-600 hover:bg-red-700" },
  ];

  const SocialIcon = ({ icon, bg }) => {
    const getIcon = () => {
      switch (icon) {
        case "facebook":
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          );
        case "linkedin":
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          );
        case "twitter":
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          );
        case "youtube":
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <div
        className={`${bg} p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer`}
      >
        {getIcon()}
      </div>
    );
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            {/* <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Star className="w-8 h-8 text-orange-500 fill-current transform transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <span className="text-xl font-bold tracking-wide">NovaDash</span>
            </div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="51"
              viewBox="0 0 178 51"
              fill="none"
            >
              <g clip-path="url(#clip0_81_85)">
                <path
                  d="M33.6894 17.4698C33.0704 18.0347 14.8863 34.6919 9.27069 47.6266L13.9464 33.2355C14.0895 32.7952 14.0895 32.3208 13.9464 31.8804C13.8033 31.44 13.5245 31.0562 13.1498 30.7841L0.903488 21.8906C-0.814305 20.6417 0.0683109 17.9188 2.19211 17.9188H17.329C17.792 17.9189 18.2431 17.7724 18.6177 17.5002C18.9923 17.2281 19.2711 16.8444 19.4142 16.404L24.0898 2.01409C24.7463 -0.00599861 27.6037 -0.00599861 28.2602 2.01409L32.9358 16.404C33.0732 16.8274 33.336 17.1991 33.6894 17.4698Z"
                  fill="url(#paint0_linear_81_85)"
                />
                <path
                  d="M51.4422 21.8872L39.1959 30.7807C38.8212 31.0528 38.5423 31.4366 38.3992 31.877C38.2561 32.3174 38.2561 32.7918 38.3993 33.2322L43.0794 47.6265C43.7358 49.6466 41.4245 51.3258 39.7056 50.078L27.4593 41.1834C27.0847 40.9113 26.6336 40.7647 26.1707 40.7647C25.7077 40.7647 25.2566 40.9113 24.882 41.1834L12.6357 50.078C10.9179 51.3258 8.60549 49.6466 9.26193 47.6265C14.8864 34.6918 33.0705 18.0346 33.6894 17.4697C34.0719 17.7619 34.5398 17.9201 35.0211 17.9199H50.1536C52.2774 17.9199 53.16 20.6383 51.4422 21.8872Z"
                  fill="url(#paint1_linear_81_85)"
                />
                <path
                  d="M33.7057 16.2715L33.6895 16.2866"
                  stroke="white"
                  stroke-width="0.110327"
                  stroke-miterlimit="10"
                />
                <path
                  d="M74.5249 35.2603H70.6238L63.0288 22.9258V35.2603H59.1277V16.5146H63.0288L70.6414 28.8713V16.5146H74.5304L74.5249 35.2603Z"
                  fill="white"
                />
                <path
                  d="M77.1527 28.1663C77.1527 26.7843 77.4212 25.5526 77.9581 24.4714C78.4641 23.423 79.2706 22.5489 80.275 21.9604C81.2856 21.3683 82.4584 21.0723 83.7933 21.0723C85.6909 21.0723 87.2403 21.6471 88.4414 22.7967C89.6425 23.9463 90.3122 25.5085 90.4505 27.4834L90.4769 28.4366C90.4769 30.574 89.8745 32.2885 88.6698 33.58C87.465 34.8716 85.8469 35.5174 83.8154 35.5174C81.7861 35.5174 80.168 34.8738 78.961 33.5867C77.754 32.2995 77.1494 30.5483 77.1472 28.3329L77.1527 28.1663ZM80.9105 28.43C80.9105 29.7539 81.162 30.7663 81.6651 31.4673C82.1682 32.1682 82.8868 32.5183 83.8209 32.5176C84.7315 32.5176 85.4423 32.1715 85.9535 31.4794C86.4647 30.7873 86.7221 29.6807 86.7258 28.1597C86.7258 26.8615 86.4684 25.8557 85.9535 25.1422C85.4387 24.4288 84.7193 24.0721 83.7955 24.0721C82.8769 24.0721 82.166 24.4266 81.6629 25.1356C81.1598 25.8446 80.909 26.9428 80.9105 28.43Z"
                  fill="white"
                />
                <path
                  d="M97.9208 30.7146L100.534 21.3291H104.462L99.718 35.2601H96.1291L91.385 21.3291H95.3127L97.9208 30.7146Z"
                  fill="white"
                />
                <path
                  d="M114.125 35.2602C113.933 34.8665 113.806 34.445 113.747 34.0113C112.837 35.0152 111.654 35.5172 110.198 35.5172C108.819 35.5172 107.677 35.1226 106.771 34.3334C106.335 33.969 105.987 33.5113 105.752 32.9942C105.517 32.4771 105.4 31.9137 105.412 31.3458C105.412 29.8696 105.964 28.7365 107.067 27.9466C108.17 27.1566 109.767 26.7576 111.858 26.7495H113.588V25.9519C113.588 25.3076 113.421 24.7927 113.088 24.4073C112.754 24.0219 112.229 23.8285 111.513 23.827C110.88 23.827 110.384 23.977 110.025 24.2771C109.666 24.5772 109.486 24.9895 109.484 25.5139H105.726C105.727 24.7047 105.992 23.918 106.481 23.2731C106.983 22.5869 107.694 22.0485 108.614 21.6579C109.593 21.2561 110.644 21.0568 111.703 21.0721C113.436 21.0721 114.813 21.5035 115.831 22.3662C116.85 23.229 117.36 24.4411 117.36 26.0026V32.0408C117.369 33.3647 117.556 34.3647 117.92 35.0406V35.2613L114.125 35.2602ZM111.017 32.6719C111.55 32.6768 112.077 32.5511 112.551 32.3056C112.989 32.089 113.352 31.7457 113.592 31.3204V28.9252H112.187C110.306 28.9252 109.304 29.5691 109.183 30.857L109.171 31.0777C109.165 31.2931 109.206 31.5072 109.291 31.7051C109.376 31.9031 109.504 32.0801 109.664 32.224C109.994 32.5226 110.444 32.6719 111.017 32.6719Z"
                  fill="white"
                />
                <path
                  d="M120.55 35.2603V16.5146H126.375C128.04 16.5146 129.529 16.8857 130.842 17.6279C132.151 18.3654 133.219 19.4653 133.918 20.7953C134.654 22.1649 135.022 23.7205 135.022 25.4622V26.3249C135.022 28.0674 134.66 29.6167 133.936 30.973C133.242 32.2983 132.178 33.394 130.874 34.1273C129.556 34.8738 128.069 35.2515 126.414 35.2603H120.55ZM124.451 19.6424V32.1568H126.337C127.863 32.1568 129.029 31.6633 129.835 30.6762C130.641 29.6892 131.053 28.2785 131.07 26.4441V25.4511C131.07 23.5462 130.671 22.102 129.874 21.1186C129.076 20.1352 127.91 19.6439 126.375 19.6446L124.451 19.6424Z"
                  fill="white"
                />
                <path
                  d="M145.817 35.26C145.626 34.8665 145.499 34.4449 145.441 34.0111C144.531 35.0151 143.347 35.5171 141.89 35.5171C140.513 35.5171 139.37 35.1225 138.464 34.3333C138.029 33.9684 137.681 33.5105 137.447 32.9935C137.212 32.4764 137.097 31.9133 137.109 31.3456C137.109 29.8695 137.66 28.7364 138.764 27.9465C139.867 27.1565 141.464 26.7575 143.556 26.7494H145.285V25.9517C145.285 25.3074 145.118 24.7926 144.784 24.4072C144.45 24.0218 143.924 23.8287 143.204 23.828C142.572 23.828 142.076 23.978 141.716 24.2781C141.356 24.5782 141.177 24.9904 141.177 25.5149H137.418C137.419 24.7057 137.684 23.9189 138.172 23.2741C138.675 22.5879 139.386 22.0495 140.305 21.6589C141.285 21.257 142.335 21.0578 143.394 21.0731C145.128 21.0731 146.505 21.5045 147.523 22.3672C148.54 23.23 149.05 24.4436 149.051 26.008V32.0462C149.059 33.3701 149.246 34.3701 149.61 35.046V35.2667L145.817 35.26ZM142.709 32.6718C143.243 32.6767 143.77 32.551 144.244 32.3055C144.682 32.0893 145.044 31.7459 145.284 31.3203V28.9251H143.88C141.999 28.9251 140.998 29.569 140.876 30.8569L140.863 31.0775C140.857 31.2931 140.898 31.5073 140.984 31.7053C141.069 31.9033 141.197 32.0802 141.357 32.2238C141.688 32.5225 142.138 32.6718 142.709 32.6718Z"
                  fill="white"
                />
                <path
                  d="M159.616 31.4081C159.616 30.9524 159.388 30.595 158.933 30.3324C158.477 30.0698 157.748 29.837 156.742 29.6307C153.395 28.9357 151.722 27.5279 151.723 25.4074C151.723 24.1717 152.241 23.1398 153.276 22.3116C154.312 21.4834 155.667 21.0693 157.341 21.0693C159.126 21.0693 160.554 21.4856 161.625 22.3182C162.696 23.1508 163.231 24.232 163.231 25.5619H159.473C159.482 25.3173 159.44 25.0737 159.35 24.846C159.26 24.6183 159.125 24.4114 158.953 24.2379C158.606 23.89 158.065 23.7164 157.328 23.7172C156.694 23.7172 156.204 23.8588 155.858 24.1419C155.693 24.269 155.56 24.4329 155.469 24.6207C155.379 24.8084 155.334 25.0148 155.337 25.2232C155.337 25.635 155.535 25.966 155.93 26.2161C156.325 26.4662 156.99 26.6868 157.926 26.8781C158.729 27.0269 159.52 27.2356 160.292 27.5025C162.278 28.2233 163.271 29.4737 163.271 31.2536C163.271 32.5231 162.719 33.5528 161.616 34.3428C160.513 35.1327 159.091 35.5251 157.351 35.52C156.174 35.52 155.127 35.3118 154.211 34.8955C153.354 34.5259 152.611 33.935 152.058 33.1833C151.553 32.5036 151.28 31.6799 151.278 30.8333H154.842C154.876 31.4952 155.122 32.002 155.582 32.3536C156.042 32.7052 156.658 32.8809 157.429 32.8809C158.148 32.8809 158.692 32.7456 159.061 32.4749C159.235 32.3576 159.377 32.1985 159.474 32.0121C159.571 31.8258 159.62 31.6181 159.616 31.4081Z"
                  fill="white"
                />
                <path
                  d="M169.409 22.8477C170.406 21.6628 171.658 21.0707 173.167 21.0715C176.219 21.0715 177.766 22.8268 177.81 26.3374V35.2595H174.051V26.4433C174.051 25.6445 173.877 25.0543 173.531 24.6725C173.185 24.2908 172.608 24.0999 171.801 24.0999C170.698 24.0999 169.901 24.5207 169.409 25.3621V35.2628H165.65V15.4834H169.409V22.8477Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_81_85"
                  x1="-0.00427246"
                  y1="24.0628"
                  x2="33.6894"
                  y2="24.0628"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7014F2" />
                  <stop offset="0.870192" stop-color="#FFAD03" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_81_85"
                  x1="9.14771"
                  y1="33.9881"
                  x2="52.3499"
                  y2="33.9881"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7014F2" />
                  <stop offset="0.870192" stop-color="#FFAD03" />
                </linearGradient>
                <clipPath id="clip0_81_85">
                  <rect
                    width="177.81"
                    height="50.0046"
                    fill="white"
                    transform="translate(0 0.498047)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed">
              Production-ready & easy to use Admin Template for Reliability and
              Customization.
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Our Services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1"
                  >
                    <service.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{service.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="space-y-3">
              {aboutUs.map((item, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1"
                  >
                    <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
            <ul className="space-y-3">
              {privacy.map((item, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-1"
                  >
                    <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 group hover:text-orange-400 transition-colors duration-300">
                <Globe className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                <a href="#" className="text-sm hover:underline">
                  www.pixinvent.com
                </a>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center space-x-2 text-gray-300 group hover:text-orange-400 transition-colors duration-300">
                <Mail className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                <a
                  href="mailto:pixinvent@gmail.com"
                  className="text-sm hover:underline"
                >
                  pixinvent@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 group hover:text-orange-400 transition-colors duration-300">
                <Phone className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                <span className="text-sm">+880 0234567890</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socialIcons.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} bg={social.bg} />
              ))}
            </div>

            {/* Hire Us Button */}
            <div className="pt-4 flex  gap-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group">
                <Users className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Hire Us</span>
              </button>
              <button className="bg-slate-400 p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-slate-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_64_1936)">
                    <path
                      d="M21.4286 0H2.57143C1.15127 0 0 1.15127 0 2.57143V16.2857C0 17.7059 1.15127 18.8571 2.57143 18.8571H5.6143L5.14803 23.0486C5.09605 23.5191 5.43535 23.9426 5.90589 23.9946C6.02603 24.0079 6.14761 23.9956 6.26266 23.9586C6.37771 23.9215 6.48362 23.8606 6.57346 23.7797L12.0437 18.8571H21.4286C22.8487 18.8571 24 17.7059 24 16.2857V2.57143C24 1.15127 22.8487 0 21.4286 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_64_1936">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}Pixinvent. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
