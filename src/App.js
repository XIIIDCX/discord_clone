import Groups from './components/Groups';
import Discover from './components/Discover';
import MainContent from './components/MainContent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex bg-[#393943] h-screen">
      {/* Friends + Groups */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Main Content */}
      <MainContent />
      {/* Hero */}
      {/* Featured */}     
    </div>
  );
}

export default App;
