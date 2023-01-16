import 'boxicons';

const Projects = () => {
  return (
    <>
      <div id="projects" className="">
        <div className="mx-auto max-w-6xl py-8">
          <h2 class="text-center text-5xl mb-10 font-medium">
            This are my{' '}
            <span className="text-6xl font-bold text-green-500">Projects!</span>
          </h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 lg:justify-around">
            {/* Card 1 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center backdrop-blur-sm">
                <h3 className="font-bold uppercase">Control Presupuesto</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Permite colocar un presupuesto y una serie de gastos a
                    través de un formulario que se van listando en la parte
                    inferior de la pantalla. Permite agregar, eliminar y editar,
                    existe validacion en los diferentes formularios.
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a
                      href="https://github.com/ivanosquis10/control-presupuesto-proyecto"
                      target="_blank"
                      className="hover:text-white"
                    >
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a
                      href="https://aesthetic-lolly-990a8f.netlify.app/"
                      target="_blank"
                    >
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 1 Ends */}

            {/* Card 2 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center">
                <h3 className="font-bold uppercase">Cotizador Criptomonedas</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      StyledComponents
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Una aplicación que cotiza el valor de las criptomonedas
                    dependiendo del la moneda seleccionada en el formulario.
                    Llamada fetch a una API para luego mostrarla en la pantalla
                    junto a un custom hook para la obtencion de la informacion
                    de manera dinamica
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a
                      href="https://github.com/ivanosquis10/proyecto-cotizacion-crypto"
                      target="_blank"
                    >
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a
                      href="https://cerulean-cucurucho-e6c6c9.netlify.app"
                      target="_blank"
                    >
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 Ends */}

            {/* Card 3 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center">
                <h3 className="font-bold uppercase">Patients CRUD</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Proyecto estilado con tailwindscss, se trata de un CRUD de
                    pacientes veterinarios con validación de formulario, con
                    implementación del localStorage, además de poder agregar,
                    eliminar y editar pacientes.
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a
                      href="https://github.com/ivanosquis10/patients-crud-react-udemy"
                      target="_blank"
                    >
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a
                      href="https://cute-unicorn-4c9a71.netlify.app"
                      target="_blank"
                    >
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 Ends */}

            {/* Card 4 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center">
                <h3 className="font-bold uppercase">CMR Project</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Un CMR usando una API REST para realizar las acciones
                    principales de "POST, GET, PUT y DELETE", utilizando React
                    Router Dom y Tailwindcss para su estilo. Permite agregar,
                    eliminar y editar clientes directamente con la API.
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a
                      href="https://github.com/ivanosquis10/CRM-project"
                      target="_blank"
                    >
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a
                      href="https://github.com/ivanosquis10/CRM-project"
                      target="_blank"
                    >
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 Ends */}

            {/* Card 5 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center">
                <h3>Titulo Proyecto</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Este es un proyecto esta hecho usando react, usando
                    tecnologias como react router dom, tailwindcss para estilar
                    el proyecto y su objetivo es tener una lista de clientes
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a href="">
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a href="">
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5 Ends */}

            {/* Card 6 */}
            <div className="mx-2 w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md">
              <div className="text-xl py-3 text-center">
                <h3>Pronto nuevo proyecto...</h3>
              </div>
              <div className="">
                <div className="w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="w-100 bg-blue-400 py-1.5 px-6 rounded-full">
                    <p className="text-base text-white font-bold">React</p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="bg-blue-400 py-1.5 px-5 rounded-full">
                    <p className="text-base text-white font-bold">ViteJS</p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <p className="text-base text-gray-300 mt-1">
                    Este es un proyecto esta hecho usando react, usando
                    tecnologias como react router dom, tailwindcss para estilar
                    el proyecto y su objetivo es tener una lista de clientes
                  </p>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a href="">
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>

                    <a href="">
                      <box-icon
                        name="paper-plane"
                        color="gray"
                        size="md"
                        animation="tada-hover"
                      ></box-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 6 Ends */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
