const SkillsCards = ({ svg, txtAlt, svgName }) => {
  return (
    <div className="w-9/12 mx-auto md:w-full py-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
      <img className="w-4/12 md:w-6/12" src={svg} alt={txtAlt} loading="lazy" />
      <p className="font-bold text-xl uppercase">{svgName}</p>
    </div>
  );
};

export default SkillsCards;
