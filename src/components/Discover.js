import React from "react";
import { AiFillCompass } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import {
  BsMusicNoteBeamed,
  BsFillPlayCircleFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { FaGraduationCap, FaHeadphones } from "react-icons/fa";
import { TbAtom } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Topic from "./Topic";
import lmfao from "../components/pictures/lmfao.jpg";

const Discover = () => {
  const topics = [
    { title: "Home", icon: <AiFillCompass /> },
    { title: "Gaming", icon: <GiConsoleController /> },
    { title: "Music", icon: <BsMusicNoteBeamed /> },
    { title: "Education", icon: <FaGraduationCap /> },
    { title: "Science & Tech", icon: <TbAtom /> },
    { title: "Content Creator", icon: <BsFillPlayCircleFill /> },
    { title: "Anime & Manga", icon: <BsFillEmojiSmileFill /> },
    { title: "Movies & TV", icon: <FiMonitor /> },
  ];
  return (
    <div className="hidden xl:flex flex-col bg-[#303136] lg:flex w-[14rem] shrink-0  sticky top-0 h-screen justify-between">
      <div className="p-4">
        {/* Title */}
        <p className="text-white font-bold text-[24px]">Discover</p>
        {/* Topics */}
        <div className="mt-4 space-y-3">
          {topics.map((topic) => (
            <Topic title={topic.title} icon={topic.icon} />
          ))}
        </div>
      </div>
      {/* Profile */}
      <div className="bg-[#292b2f] h-[3rem] flex text-white/80 items-center px-2 justify-between">
        <div className="flex items-center">
          <img
            src={lmfao}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          ></img>
          <div className="pl-2">
            <p className="text-[13px] font-bold">XIIIDCX</p>
            <p className="text-[11px] text-gray-400">#13669</p>
          </div>
        </div>
        <div className="flex space-x-3 text-[20px]">
          <MdKeyboardVoice />
          <FaHeadphones />
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
};

export default Discover;
