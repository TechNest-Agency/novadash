import Applications from "../../components/Applications";
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
      {/* github */}
      <GithubRepo/>
      {/* review */}
      <Review/>
    </div>
  );
};

export default Home;
