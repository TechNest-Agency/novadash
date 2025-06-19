
import vue3 from "../assets/images/vue-icons/Vue-3.png";
import vuetify from "../assets/images/vue-icons/vuetify.png";
import vite from "../assets/images/vue-icons/vite.png";
import typescript from "../assets/images/vue-icons/type.png";
import vueRouter from "../assets/images/vue-icons/vue-router.png";
import vueUse from "../assets/images/vue-icons/vue-use.png";
import tooling from "../assets/images/vue-icons/tooling.png";
import pinia from "../assets/images/vue-icons/pinia.png";
import iconify from "../assets/images/vue-icons/iconify.png";
import vueI18n from "../assets/images/vue-icons/vue-I18n.png";
import jwt from "../assets/images/vue-icons/jwt.png";
import starterKit from "../assets/images/vue-icons/starter-kit.png";

const VueJsIntegrations = () => {
  const cards = [
    {
      img: vue3,
      title: "Vue 3 - Progressive JS Framework",
      description:
        "An approachable, performant, and versatile framework for building web user interfaces.",
    },
    {
      img: vuetify,
      title: "Vuetify 3 - Popular Vue.js framework",
      description:
        "Most Popular and feature rich VueJS UI framework will help you develop faster than ever.",
    },
    {
      img: vite,
      title: "Vite - Tool to quickly start a template",
      description:
        "Get ready for a development environment that can finally catch up with you. It's Insanely superfast.",
    },
    {
      img: typescript,
      title: "TypeScript - Strict syntactical superset",
      description:
        "TypeScript extends JavaScript & improves the developer experience by adding type safety.",
    },
    {
      img: vueRouter,
      title: "Vue Router - Deeply Integrates",
      description:
        "The official router for Vue.js. It deeply integrates with Vue.js core to make building SPA with Vue.js a breeze.",
    },
    {
      img: vueUse,
      title: "VueUse - Collection of Utilities",
      description:
        "Collection of essential Vue Composition Utilities to build your vue app quickly.",
    },
    {
      img: tooling,
      title: "Tooling & DX - Enhanced Developer Experience",
      description:
        "The template comes with preconfigured tooling & VSCode support to get you started quickly.",
    },
    {
      img: pinia,
      title: "Pinia - Store library for Vue",
      description:
        "Stores are as familiar as components. An API designed to let you write well-organized stores.",
    },
    {
      img: iconify,
      title: "Iconify Icons - Freedom to choose icons",
      description:
        "Easy to avoid vendor lock-in. Use open-source icon sets with a large choice of icon components.",
    },
    {
      img: vueI18n,
      title: "Vue I18n - Allows for formatting",
      description:
        "In addition to simple translation, support localization such as pluralization, number, datetime … etc",
    },
    {
      img: jwt,
      title: "JWT & ACL - User-based authentication",
      description:
        "With JWT authorization, you get a user-based authentication. Once the user is authenticated.",
    },
    {
      img: starterKit,
      title: "Starter Kit - A kit with the basic items",
      description:
        "Setup your project quickly without having to remove unnecessary features and start your project rapidly.",
    },
  ];

//   const cards = [
//     {
//       img: "https://via.placeholder.com/42/7014F2/FFFFFF?text=V3",
//       title: "Vue 3 - Progressive JS Framework",
//       description:
//         "An approachable, performant, and versatile framework for building web user interfaces.",
//     },
//     {
//       img: "https://via.placeholder.com/42/4FC08D/FFFFFF?text=Vue",
//       title: "Vuetify 3 - Popular Vue.js framework",
//       description:
//         "Most Popular and feature rich VueJS UI framework will help you develop faster than ever.",
//     },
//     {
//       img: "https://via.placeholder.com/42/646CFF/FFFFFF?text=Vite",
//       title: "Vite - Tool to quickly start a template",
//       description:
//         "Get ready for a development environment that can finally catch up with you. It's Insanely superfast.",
//     },
//     {
//       img: "https://via.placeholder.com/42/3178C6/FFFFFF?text=TS",
//       title: "TypeScript - Strict syntactical superset",
//       description:
//         "TypeScript extends JavaScript & improves the developer experience by adding type safety.",
//     },
//     {
//       img: "https://via.placeholder.com/42/42B883/FFFFFF?text=Route",
//       title: "Vue Router - Deeply Integrates",
//       description:
//         "The official router for Vue.js. It deeply integrates with Vue.js core to make building SPA with Vue.js a breeze.",
//     },
//     {
//       img: "https://via.placeholder.com/42/35495E/FFFFFF?text=Use",
//       title: "VueUse - Collection of Utilities",
//       description:
//         "Collection of essential Vue Composition Utilities to build your vue app quickly.",
//     },
//     {
//       img: "https://via.placeholder.com/42/41B883/FFFFFF?text=Tool",
//       title: "Tooling & DX - Enhanced Developer Experience",
//       description:
//         "The template comes with preconfigured tooling & VSCode support to get you started quickly.",
//     },
//     {
//       img: "https://via.placeholder.com/42/FFD02F/000000?text=P",
//       title: "Pinia - Store library for Vue",
//       description:
//         "Stores are as familiar as components. An API designed to let you write well-organized stores.",
//     },
//     {
//       img: "https://via.placeholder.com/42/1769AA/FFFFFF?text=I",
//       title: "Iconify Icons - Freedom to choose icons",
//       description:
//         "Easy to avoid vendor lock-in. Use open-source icon sets with a large choice of icon components.",
//     },
//     {
//       img: "https://via.placeholder.com/42/42B883/FFFFFF?text=I18n",
//       title: "Vue I18n - Allows for formatting",
//       description:
//         "In addition to simple translation, support localization such as pluralization, number, datetime … etc",
//     },
//     {
//       img: "https://via.placeholder.com/42/000000/FFFFFF?text=JWT",
//       title: "JWT & ACL - User-based authentication",
//       description:
//         "With JWT authorization, you get a user-based authentication. Once the user is authenticated.",
//     },
//     {
//       img: "https://via.placeholder.com/42/FF647F/FFFFFF?text=SK",
//       title: "Starter Kit - A kit with the basic items",
//       description:
//         "Setup your project quickly without having to remove unnecessary features and start your project rapidly.",
//     },
//   ];

  return (
    <section className="container mx-auto w-[95%] py-14">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full mx-auto">
          Vuejs <span className="text-[#7014F2]" >
             Framework Integrations
          </span> and Features
        </h2>
        <p className="text-[#8C8C8C] w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
          With best-in-class UI frameworks for respective technologies,
          you can <span className="text-gray-900">build your dream app with long-term support</span> and regular updates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-5 hover:shadow-[inset_-2px_-2px_6px_1px_rgba(164,92,233,0.5)] transition-all duration-300 "
          >
            <div className="flex flex-col ">
                <div className="w-[42px] h-[42px] rounded-lg bg-gray-200 mb-4 flex justify-center items-center">
                      <img
                src={card.img}
                alt={card.title}
                className="w-[32px] h-[32px] object-cover"
              />
                </div>
           
              <h3 className="text-base md:text-lg font-semibold text-black min-h-12">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[#8C8C8C] mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VueJsIntegrations;