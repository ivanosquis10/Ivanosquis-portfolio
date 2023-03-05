import 'boxicons'
import { proyectData } from '../data/ProyectData'
import ProyectCard from './ProyectCard'
import imgControl from '../assets/img/planificadorGastos.webp'
import imgPaciente from '../assets/img/crudPacientes.webp'
import imgCripto from '../assets/img/cotizadorCripto.webp'
import imgAuto from '../assets/img/CotizadorAutos.webp'

const Projects = () => {
  return (
    <section>
      <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl py-8">
          <h2 className="text-center text-5xl mb-8 font-medium">
            Here my <span className="font-bold text-green-500">Projects!</span>
          </h2>
          <div className="md:p-10 flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 lg:justify-around">
            <ProyectCard
              titulo="control presupuesto"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgControl}
              github="https://github.com/ivanosquis10/control-presupuesto-proyecto"
              demo="https://aesthetic-lolly-990a8f.netlify.app/"
            />

            <ProyectCard
              titulo="crud pacientes"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgPaciente}
              github="https://github.com/ivanosquis10/patients-crud-react-udemy"
              demo="https://cute-unicorn-4c9a71.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador criptomonedas"
              stack={['React', 'styleComponents']}
              image={imgCripto}
              github="https://github.com/ivanosquis10/proyecto-cotizacion-crypto"
              demo="https://cerulean-cucurucho-e6c6c9.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador seguros autos"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgAuto}
              github="https://github.com/ivanosquis10/autoinsurance-quotes-project"
              demo="https://autoinsurance-quotes-ivanosquis.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
