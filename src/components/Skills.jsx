import 'boxicons';

const Skills = () => {
  return (
    <section id="skills">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 class="text-center text-5xl mb-10 font-medium">
          This are my{' '}
          <span className="text-6xl font-bold text-green-500">Skills!</span>
        </h2>
        <div className="w-full mx-auto grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 text-center uppercase">
          <p className="text-2xl flex items-center justify-center gap-2 py-2 mt-1 font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            HTML
            <box-icon type="logo" name="html5" color="#f06529"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            css
            <box-icon type="logo" name="css3" color="#2965f1"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            javascript
            <box-icon type="logo" name="javascript" color="yellow"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            react
            <box-icon type="logo" name="react" color="#61dafb"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            github
            <box-icon type="logo" name="github" color="gray"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            git
            <box-icon type="logo" name="git" color="#f06529"></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            Tailwindcss
            <box-icon
              type="logo"
              name="tailwind-css"
              color="#38bdf8"
            ></box-icon>
          </p>

          <p className=" flex items-center justify-center gap-2 mt-1 py-2 py-2 text-2xl font-bold text-white shadow shadow-green-600 rounded-md hover:text-green-600 hover:bg-slate-800 ease-in-out duration-300 hover:cursor-pointer">
            git
            <box-icon type="logo" name="git" color="#f06529"></box-icon>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
