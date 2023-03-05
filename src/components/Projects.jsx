import 'boxicons'
import { proyectData } from '../data/ProyectData'
import ProyectCard from './ProyectCard'

const Projects = () => {
  return (
    <section>
      <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl py-8">
          <h2 className="text-center text-5xl mb-8 font-medium">
            Here my <span className="font-bold text-green-500">Projects!</span>
          </h2>
          <div className="md:p-10 flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 lg:justify-around">
            {proyectData.map((proyecto) => (
              <ProyectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
