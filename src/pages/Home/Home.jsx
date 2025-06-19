import Applications from "../../components/Applications";
import Documentation from "../../components/Documentation";
import FrontPages from "../../components/FrontPages";
import Useful from "../../components/Useful";
import VueJsIntegrations from "../../components/VueJsIntegrations";
import Experience from "./Experience";
import GithubRepo from "./GithubRepo";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      {/* experience section */}
      <Experience />

      {/*  Vue js Framework Integrations and Features*/}
      <VueJsIntegrations />

      {/* Applications Stunning */}
      <Applications/>
      
      {/* documentation */}
      <Documentation/>

      {/* UsefulPages */}
      <Useful/>

      {/* Front Pages */}
      <FrontPages/>

      {/* github */}
      <GithubRepo/>
      {/* review */}
      <Review/>
    </div>
  );
};

export default Home;
