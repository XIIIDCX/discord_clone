import img1 from "../components/pictures/img1.png";
import img2 from "../components/pictures/img2.png";
import img3 from "../components/pictures/img3.png";
import img4 from "../components/pictures/img4.png";
import dc from "../components/pictures/dc.png";
import { AiFillCompass } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [img1, img2, img3, img4];

  return (
    <div className="hidden sm:flex bg-[#212226] w-[5rem] shrink-0 h-screen sticky top-0 pt-6">
      {/* Groups */}
      <div className="flex flex-col items-center w-full space-y-4">
        {/* Discord */}
        <Link to="/">
          <div className="bg-[#36393f] p-1 rounded-[1.3rem] cursor-pointer">
            <img
              src={dc}
              alt="discord"
              className="w-12 h-12 rounded-full text-white brightness-75"
            />
          </div>
        </Link>

        {/* Compass */}
        <div className="bg-[#7289dc] p-3 rounded-[1.3rem] cursor-pointer">
          <AiFillCompass
            alt="compass"
            className="w-8 h-8 rounded-full text-white"
          />
        </div>
        {/* Groups */}
        <div className="space-y-2 pt-4 cursor-pointer">
          {groups.map((group) => (
            <div key={group} className="w-14 h-14 flex">
              <img
                src={group}
                alt="group"
                className="object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        {/* Plus */}
        <div className="bg-[#36393f] p-4 rounded-full cursor-pointer">
          <FiPlus alt="plus" className="w-6 h-6 rounded-full text-green-700" />
        </div>
      </div>
    </div>
  );
};

export default Groups;
