import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";

const MainContent = () => {
  return (
    <div className="bg-[#393943] w-full px-5 pt-4">
      
      {/* Hero */}
      <Hero />
      
      {/* Featured Servers */}
      <Featured />
    </div>
  );
};

export default MainContent;
