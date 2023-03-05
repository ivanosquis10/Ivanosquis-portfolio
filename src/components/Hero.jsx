import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className="py-10 min-h-full h-screen md:grid md:grid-cols-3 md:items-center mb-10 md:mb-0">
      <div className="md:col-span-2 max-w-full px-5 mt-20 md:mt-10">
        <div>
          <h1 className="mt-3 mb-3 text-[4rem] md:text-8xl font-medium leading-[4rem] tracking-tight text-slate-300">
            I'm
            <span className="text-green-500 font-bold"> Iván Rodríguez</span>
          </h1>
          <p className="text-2xl md:text-5xl font-bold leading-8 text-slate-300 mb-3">
            Frontend Developer React
          </p>
          <div>
            <p className="mt-2 md:mb-2 md:text-lg leading-relaxed text-slate-400 md:tracking-wide">
              Tengo 22 años de edad y soy de Venezuela, soy una persona muy
              proactiva, con ganas de aprender y mejorar cada día más
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/4 mt-6 flex flex-col items-center justify-center md:flex-row gap-4">
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
      <img
        className="hidden lg:block"
        src="../logos/logo-iv-3.svg"
        width="400"
        height="200"
        alt="logotipo ivanosquis"
        loading="lazy"
      />
    </section>
  )
}

export default Hero
