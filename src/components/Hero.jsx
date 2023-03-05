import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className="py-10 min-h-full h-screen mb-10 mt-5 md:mb-0 grid place-content-center">
      <div className="max-w-full px-5 flex flex-col items-center">
        <div className="flex flex-col lg:items-center">
          <h1 className="lg:text-center mt-3 mb-3 text-[4rem] md:text-8xl font-medium leading-[4rem] tracking-tight text-slate-300">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h1>
          <p className="text-2xl md:text-5xl font-bold lg:tracking-tighter text-slate-300 mb-3">
            Frontend Developer React
          </p>
          <div>
            <p className="lg:text-center w-full lg:w-3/5 mx-auto mt-2 md:mb-2 md:text-lg leading-relaxed text-slate-400 md:tracking-wide">
              Tengo 22 años de edad y soy de Venezuela, soy una persona muy
              proactiva, con ganas de aprender y mejorar cada día más
            </p>
          </div>
        </div>

        <div className="w-full lg:w-3/4 mt-6 flex flex-col items-center justify-center md:flex-row gap-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full text-xl bg-green-600/80 uppercase rounded-md shadow shadow-green-900 px-5 py-3 font-bold text-slate-900 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500"
          >
            Proyectos
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="w-full text-xl bg-green-600/80 uppercase rounded-md shadow shadow-green-900 px-5 py-3 font-bold text-slate-900 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500"
          >
            contáctame
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
