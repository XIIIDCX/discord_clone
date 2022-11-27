const Topic = ({ title, icon }) => {
  return (
    <div className="flex text-white/50 items-center text-[16px]">
      <button className="flex w-full py-2.5 items-center hover:text-white hover:bg-[#7289dc] focus:text-white focus:bg-[#7289dc] rounded-[0.4rem] font-semibold duration-100 ease-out">
        <div className="pl-2 text-[25px]">{icon}</div>
        <p className="ml-3">{title}</p>
      </button>
    </div>
  );
};

export default Topic;
