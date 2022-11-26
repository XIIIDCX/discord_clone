import React from "react";
import hero from "../components/pictures/hero.webp";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative  h-[13rem] sm:h-[16rem] md-[19rem] rounded-[0.5rem] z-10">
      {/* Background Image */}
      <div className="absolute flex w-full">
        <img
          src={hero}
          alt="hero"
          className="object-cover w-full rounded-[0.5rem] h-[13rem] sm:h-[16rem] md-[19rem] z-10"
        />
      </div>
      {/* Overlay */}
      <div className="absolute flex w-full h-full bg-black/20 z-10 rounded-[0.5rem]"></div>
      {/* Search Bar */}
      <div
        className="relative z-20 flex flex-col items-center 
                      justify-center h-full font-bold text-white 
                      pb-0 space-y-2"
      >
        <p className="text-[19px] md:text-[24px] font-black">
          Find your community on Discord
        </p>
        <p className="pb-2 text-[13.5px] md:text-[17px] text-white/60">
          From gaming, to music, to study, there`s a place for you.
        </p>
        <div className="relative flex items-center mb-4">
          <input
            placeholder="Explore servers"
            type="search"
            className="w-[25rem] md:w-[35rem] py-2 md:py-3 rounded-[0.3rem] 
                      pl-3 placeholder:text-[14px] md:placeholder:text-[17px] placeholder:text-gray-500 
                      outline-0 text-black"
          />
          <FiSearch className="absolute text-black right-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
