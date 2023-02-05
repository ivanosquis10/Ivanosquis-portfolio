import html from '../assets/skillsimg/html.svg';
import css from '../assets/skillsimg/css.svg';
import js from '../assets/skillsimg/js.svg';
import tailwindcss from '../assets/skillsimg/tailwindcss.svg';
import react from '../assets/skillsimg/react.svg';
import vitejs from '../assets/skillsimg/vitejs.svg';
import nodejs from '../assets/skillsimg/nodejs.svg';
import git from '../assets/skillsimg/git.svg';
import mysql from '../assets/skillsimg/mysql.svg';
import terminal from '../assets/skillsimg/terminal.svg';

const Skills = () => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 className="text-center text-5xl mb-10 font-medium">
          Here my{' '}
          <span className="text-6xl font-bold text-green-500">Skills!</span>
        </h2>

        <div className="w-full mx-auto md:max-w-full md:mx-auto grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 text-center">
          <div className="w-9/12 mx-auto md:w-full py-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={html}
              alt="logo de html5"
              loading="lazy"
            />
            <p className="font-bold text-2xl">HTML</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={css}
              alt="logo de css3"
              loading="lazy"
            />
            <p className="font-bold text-2xl">CSS</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={js}
              alt="logo de javascript"
            />
            <p className="font-bold text-2xl">JavaScript</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-5/12 md:w-6/12"
              src={react}
              alt="logo de react"
              loading="lazy"
            />
            <p className="font-bold text-2xl">React</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={vitejs}
              alt="logo de vitejs"
              loading="lazy"
            />
            <p className="font-bold text-2xl">ViteJS</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={nodejs}
              alt="logo de nodeJS"
              loading="lazy"
            />
            <p className="font-bold text-2xl">NodeJS</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={git}
              alt="logo de git"
              loading="lazy"
            />
            <p className="font-bold text-2xl">Git</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={mysql}
              alt="logo de mysql"
              loading="lazy"
            />
            <p className="font-bold text-2xl">Mysql</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={terminal}
              alt="logo de la terminal"
              loading="lazy"
            />
            <p className="font-bold text-2xl">Terminal</p>
          </div>

          <div className="w-9/12 mx-auto md:w-full p-2 flex flex-col justify-center items-center gap-2 rounded shadow shadow-green-500 hover:shadow-md hover:shadow-green-600 ease-in-out duration-200">
            <img
              className="w-4/12 md:w-6/12"
              src={tailwindcss}
              alt="logo de tailwindcss"
              loading="lazy"
            />
            <p className="font-bold text-2xl">TailwindCSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
