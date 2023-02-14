/*
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
*/
import SkillsCards from './SkillsCards';

const Skills = () => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 className="text-center text-5xl mb-10 font-medium">
          Here my{' '}
          <span className="text-6xl font-bold text-green-500">Skills!</span>
        </h2>

        <div className="w-full mx-auto md:max-w-full md:mx-auto grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-5 text-center">
          <SkillsCards
            svg="/skillsImg/html.svg"
            txtAlt="logo de html5"
            svgName="html5"
          />
          <SkillsCards
            svg="/skillsImg/css.svg"
            txtAlt="logo de css3"
            svgName="css3"
          />
          <SkillsCards
            svg="/skillsImg/js.svg"
            txtAlt="logo de javascript"
            svgName="javascript"
          />
          <SkillsCards
            svg="/skillsImg/react.svg"
            txtAlt="logo de react"
            svgName="react"
          />
          <SkillsCards
            svg="/skillsImg/nodejs.svg"
            txtAlt="logo de nodejs"
            svgName="nodejs"
          />
          <SkillsCards
            svg="/skillsImg/git.svg"
            txtAlt="logo de git"
            svgName="git"
          />
          <SkillsCards
            svg="/skillsImg/terminal.svg"
            txtAlt="logo de la terminal"
            svgName="terminal"
          />
          <SkillsCards
            svg="/skillsImg/tailwindcss.svg"
            txtAlt="logo de tailwind"
            svgName="tailwindcss"
          />
          <SkillsCards
            svg="/skillsImg/vite.svg"
            txtAlt="logo de vitejs"
            svgName="vitejs"
          />
          <SkillsCards
            svg="/skillsImg/mysql.svg"
            txtAlt="logo de mysql"
            svgName="mysql"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
