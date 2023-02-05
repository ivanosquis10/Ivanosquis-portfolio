import { Link } from 'react-scroll';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-10 flex items-center min-h-full justify-center"
    >
      <div className="mx-auto max-w-full px-5 md:px-10">
        <div className="text-center">
          <h2 className="mt-3 mb-3 text-[4rem] md:text-[5rem] font-medium leading-[4rem] tracking-tight text-slate-200">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold leading-8 text-slate-300 mb-3">
            Frontend Developer React
          </p>
          <div className="grid md:grid-cols-2 items-center md:gap-4">
            <p className="mt-2 md:mb-2 text-base md:text-lg leading-relaxed text-slate-300 px-3 md:p-0">
              Tengo 22 años de edad y soy de Venezuela. Soy una persona muy
              proactiva, con ganas de aprender y mejorar cada vez más
            </p>
            <p className="mt-2 mb-2 text-base md:text-lg leading-relaxed text-slate-300 px-3 md:p-0">
              Me considero un buen compañero de equipo, muy comunicativo,
              positivo, analista, apasionado, dedicado y responsable
            </p>
          </div>
        </div>

        <div className="w-1/2 mx-auto mt-6 flex flex-col items-center justify-center md:flex-row gap-4 ">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full uppercase transform rounded-md transparent shadow shadow-white px-5 py-3  font-bold text-white text-center transition-colors hover:bg-green-700 hover:cursor-pointer"
          >
            My Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full uppercase transform rounded-md transparent shadow shadow-white px-5 py-3  font-bold text-white text-center transition-colors hover:bg-green-700 hover:cursor-pointer"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
