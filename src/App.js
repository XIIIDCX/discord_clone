import "./App.css";
import Home from "./components/Home";
import CardPage from "./components/CardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>    
    </Router>  
  );
}

export default App;
