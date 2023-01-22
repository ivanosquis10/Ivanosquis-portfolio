import { Link } from 'react-scroll';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 flex items-center min-h-full justify-center"
    >
      <div className="mx-auto max-w-screen">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold leading-8 text-slate-400 mb-3">
            Welcome to my world!!
          </p>
          <h2 className="mt-3 mb-3 text-[4rem] md:text-[5rem] font-medium leading-[4rem] tracking-tight text-white">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h2>
          <p className="mt-5 text-md md:text-lg leading-relaxed text-slate-400">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center md:flex-row gap-4 ">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="transform rounded-md bg-green-600 px-5 py-3 border border-slate-200 font-bold text-white text-center transition-colors hover:bg-green-700"
          >
            Go to my proyects!
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className=" transform rounded-md border border-slate-200 px-5 py-3 font-medium text-white text-center transition-colors hover:bg-slate-700"
          >
            Go to my contact!!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
