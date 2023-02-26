import { Link } from 'react-scroll'
import Spinner from './Spinner'

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-10 flex items-center min-h-full justify-center mt-20"
    >
      <div className="mx-auto max-w-full px-5 md:px-10">
        <div className="text-center">
          <h1 className="mt-3 mb-3 text-[4rem] md:text-[5rem] font-medium leading-[4rem] tracking-tight text-slate-200">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold leading-8 text-slate-300 mb-3">
            Frontend Developer React
          </p>
          <div className="md:w-10/12 mx-auto grid items-center gap-2">
            <p className="mt-2 md:mb-2 text-base leading-relaxed text-slate-300 tracking-wide px-2">
              Tengo 22 años de edad y soy de Venezuela. Soy una persona muy
              proactiva, con ganas de aprender y mejorar cada día más
            </p>
            <p className="mt-2 mb-2 text-base leading-relaxed text-slate-300 tracking-wide px-1">
              Me considero un buen compañero de equipo, muy comunicativo,
              positivo, analista, apasionado, dedicado y responsable
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto mt-6 flex flex-col items-center justify-center md:flex-row gap-4 ">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full uppercase transform rounded-md shadow shadow-green-900 border-2 border-green-700 px-5 py-3 font-bold text-white text-center ease-in-out duration-300 hover:border-green-500 hover:cursor-pointer"
          >
            My Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full uppercase transform rounded-md shadow shadow-green-900 border-2 border-green-700 px-5 py-3 font-bold text-white text-center ease-in-out duration-300 hover:border-green-500 hover:cursor-pointer"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
