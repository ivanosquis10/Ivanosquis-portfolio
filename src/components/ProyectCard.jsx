import 'boxicons'

const ProyectCard = ({ proyecto }) => {
  const { titulo, stack, image, descripcion, github, demo } = proyecto
  return (
    <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-3xl hover:shadow-md rounded-md ease-in-out duration-200">
      <div className="text-xl md:text-3xl py-3 text-center">
        <h3 className="font-bold uppercase">{titulo}</h3>
      </div>
      <div>
        <div className="sm:w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
          <div className="flex items-center gap-2">
            {stack.map((stack) => (
              <p className="border-2 border-green-600 text-base md:text-lg text-white font-bold  px-1 rounded-md">
                {stack}
              </p>
            ))}
          </div>
        </div>

        <div className="w-11/12 mx-auto p-4">
          <div className="grid md:grid-cols-2 items-center gap-3">
            <a
              className="cursor-pointer"
              href="https://aesthetic-lolly-990a8f.netlify.app/"
              target="_blank"
            >
              <img
                width="350px"
                height="200px"
                className="bg-cover rounded-xl"
                src={`../${image}`}
                alt={`demo del proyecto ${titulo}`}
                loading="lazy"
                title="Demo del proyecto"
              />
            </a>
            <p className="md:text-base text-gray-300 mt-1 tracking-wide">
              {descripcion}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 py-4 mt-2">
            <a
              href={github}
              target="_blank"
              title={`Repositorio del ${titulo}`}
            >
              <box-icon
                type="logo"
                name="github"
                color="#22c55e"
                size="md"
                animation="tada-hover"
              ></box-icon>
            </a>

            <a
              href={demo}
              target="_blank"
              title={`Demo del proyecto ${titulo}`}
            >
              <box-icon
                name="paper-plane"
                color="#22c55e"
                size="md"
                animation="tada-hover"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProyectCard
