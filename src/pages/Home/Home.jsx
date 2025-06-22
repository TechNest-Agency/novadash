import Applications from "../../components/Applications";
import Documentation from "../../components/Documentation";
import FAQSection from "../../components/FAQsection";
import FrontPages from "../../components/FrontPages";
import PredefinedLayout from "../../components/PredefinedLayout";
import PricingSection from "../../components/PricingSection";
import Useful from "../../components/Useful";
import VueJsIntegrations from "../../components/VueJsIntegrations";
import Experience from "./Experience";
import GithubRepo from "./GithubRepo";
import Review from "./Review";

import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* pre-defined Layout */}
      <PredefinedLayout/>


      {/* experience section */}
      <Experience />

      {/*  Vue js Framework Integrations and Features*/}
      <VueJsIntegrations />

      {/* Applications Stunning */}
      <Applications />

      {/* documentation */}
      <Documentation />

      {/* UsefulPages */}
      <Useful />

      {/* Front Pages */}
      <FrontPages />

      {/* github */}
      <GithubRepo />
      {/* review */}
      <Review />
      {/* Pricing section */}
      <PricingSection />
      {/* faq*/}
      <FAQSection />
    </div>
  );
};

export default Home;
