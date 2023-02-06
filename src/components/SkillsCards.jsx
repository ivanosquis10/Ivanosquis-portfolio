const SkillsCards = ({ svg, txtAlt, svgName }) => {
  // className="w-4/12 max-h-full md:w-6/12"

  return (
    <div className="w-9/12 mx-auto md:w-full py-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
      <img
        className="w-[100px] max-h-full md:w-[120px]"
        src={svg}
        alt={txtAlt}
        loading="lazy"
        title={svgName}
      />
      <p className="font-bold text-xl uppercase">{svgName}</p>
    </div>
  );
};

export default SkillsCards;
