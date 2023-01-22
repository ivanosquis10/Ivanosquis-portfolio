const Announcement = () => {
  return (
    <div className="text-xs sm:flex sm:items-center sm:justify-center sm:gap-2 md:text-base w-100 text-center font-bold shadow-md border border-green-600 ">
      <p className=" p-1 text-red-700  font-black">
        Announcement!
        <span className="text-white">
          {' '}
          Currently learning full React and Typescript!{' '}
        </span>
      </p>

      <p className=" p-1 text-red-700  font-black">
        Anuncio!{' '}
        <span className="text-white">
          Actualmente aprendiendo React a full y Typescript!
        </span>
      </p>
    </div>
  );
};

export default Announcement;
