import { Link } from 'react-scroll';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 flex items-center min-h-full justify-center"
    >
      <div className="mx-auto max-w-full px-5 md:px-10">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold leading-8 text-slate-400 mb-3">
            Welcome to my world!!
          </p>
          <h2 className="mt-3 mb-3 text-[4rem] md:text-[5rem] font-medium leading-[4rem] tracking-tight text-white">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h2>
          <p className="mt-5 text-md md:text-lg leading-relaxed text-slate-400 px-2">
            Tengo 22 años de edad y soy de Venezuela. Soy una persona muy
            proactiva, con ganas de aprender y mejorar cada vez más. Me
            considero un buen compañero de equipo y muy comunicativo, positivo,
            analista, apasionado y dedicado a mis responsabilidades.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center md:flex-row gap-4 ">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="transform rounded-md bg-green-600 px-5 py-3 border border-slate-200 font-bold text-white text-center transition-colors hover:bg-green-700 hover:cursor-pointer"
          >
            Go to my proyects!
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className=" transform rounded-md border border-slate-200 px-5 py-3 font-medium text-white text-center transition-colors hover:bg-slate-700 hover:cursor-pointer"
          >
            Go to my contact!!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
