import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MapSection from "../components/YamunaMap";
import ReportsSection from "../components/ReportSection";
import YamunaMap from '../components/YamunaMap';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* FULLSCREEN BACKGROUND */}
      <div className="bg-image"></div>

      {/* CONTENT ON TOP */}
      <div className="home-content">
        <Hero />
        <YamunaMap />
        <div className="content">
          {/* <MapSection /> */}
          <ReportsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
