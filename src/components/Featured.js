import { Link } from "react-router-dom";
import picture1 from "../components/pictures/background2.jpg";
import picture2 from "../components/pictures/lmfao.jpg";
import bg01 from "../components/pictures/bg01.jpg";
import bg02 from "../components/pictures/bg02.jpg";
import bg03 from "../components/pictures/bg03.jpg";
import bg04 from "../components/pictures/bg04.jpg";
import Card from "./Card";

const Featured = () => {
  const cards = [
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg01,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg02,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg03,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg04,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
  ];

  return (
    <div className="pt-6">
      {/* Titles */}
      <div className="text-white pb-4">
        <p className="font-bold text-[20px]">Featured Servers</p>
        <p className="text-white/50">
          Some awesome Discords we think you`d love
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-y-8 mb-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xs:gap-x-2  sm:gap-x-4">
        {cards.map((card) => (
          <Link to="/card">
            <Card
              bg={card.bg}
              profile={card.profile}
              title={card.title}
              description={card.description}
              size={card.size}
              key={card.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
