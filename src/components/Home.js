import MainContent from "./MainContent";
import Discover from "./Discover";
import Groups from "./Groups";

const Home = () => {
  return (
    <div className="flex bg-[#393943]">
      {/* Groups */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default Home;
