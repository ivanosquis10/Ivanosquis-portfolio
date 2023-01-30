import 'boxicons';

const Projects = () => {
  return (
    <section>
      <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl py-8">
          <h2 className="text-center text-5xl mb-8 font-medium">
            Here my{' '}
            <span className="text-6xl font-bold text-green-500">Projects!</span>
          </h2>
          <div className="md:p-10 flex flex-col flex-wrap items-center justify-center gap-3 lg:justify-around">
            {/* Card 1 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md hover:bg-gray-900">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Control Presupuesto</h3>
              </div>
              <div>
                <div className=" sm:w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer hover:shadow-md hover:shadow-green-700 hover:rounded-xl"
                      href="https://aesthetic-lolly-990a8f.netlify.app/"
                      target="_blank"
                    >
                      <img
                        className="bg-cover rounded-xl"
                        src="https://i.ibb.co/NVGwNRm/Screenshot-2023-01-25-17-04-12.png"
                        alt="demo del proyecto del planificador de gastos"
                      />
                    </a>
                    <p className="text-base md:text-xl text-gray-300 mt-1">
                      Permite colocar un presupuesto y una serie de gastos a
                      través de un formulario que se van listando en la parte
                      inferior de la pantalla. Permite agregar, eliminar y
                      editar, existe validacion en los diferentes formularios.
                    </p>
                  </div>

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
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md hover:bg-gray-900">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Cotizador Criptomonedas</h3>
              </div>
              <div>
                <div className="w-100 flex justify-center items-center gap-3 p-4 ">
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      StyledComponents
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer hover:shadow-md hover:shadow-green-700 hover:rounded-xl"
                      href="https://cerulean-cucurucho-e6c6c9.netlify.app"
                      target="_blank"
                    >
                      <img
                        className="bg-cover rounded-xl"
                        src="https://i.ibb.co/CnFm9WV/Screenshot-2023-01-25-18-07-15.png"
                        alt="demo del proyecto del cotizador de criptomonedas"
                      />
                    </a>
                    <p className="text-base md:text-xl text-gray-300 mt-1">
                      Una aplicación que cotiza el valor de las criptomonedas
                      dependiendo del la moneda seleccionada en el formulario.
                      Llamada fetch a una API para luego mostrarla en la
                      pantalla junto a un custom hook para la obtencion de la
                      informacion de manera dinamica
                    </p>
                  </div>
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
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md hover:bg-gray-900">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">CRUD Pacientes</h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer hover:shadow-md hover:shadow-green-700 hover:rounded-xl"
                      href="https://cute-unicorn-4c9a71.netlify.app"
                      target="_blank"
                    >
                      <img
                        className="bg-cover rounded-xl"
                        src="https://i.ibb.co/0CYYmpN/Screenshot-2023-01-25-18-15-45.png"
                        alt="demo del proyecto de pacientes veterinarios"
                      />
                    </a>
                    <p className="text-base md:text-xl text-gray-300 mt-1">
                      Proyecto estilado con tailwindscss, se trata de un CRUD de
                      pacientes veterinarios con validación de formulario, con
                      implementación del localStorage, además de poder agregar,
                      eliminar y editar pacientes.
                    </p>
                  </div>
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
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md hover:bg-gray-900">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">
                  Cotizador de Seguros Autos
                </h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer hover:shadow-md hover:shadow-green-700 hover:rounded-xl"
                      href="https://autoinsurance-quotes-ivanosquis.vercel.app/"
                      target="_blank"
                    >
                      <img
                        className="bg-cover rounded-xl"
                        src="https://i.ibb.co/4FnBGPF/Screenshot-2023-01-25-18-21-42.png"
                        alt="demo del proyecto del cotizador de seguros de autos"
                      />
                    </a>
                    <p className="text-base md:text-xl text-gray-300 mt-1">
                      Cotizador de Seguros de Automoviles, este proyecto te
                      permite cotizar el seguro de un auto dependiendo de las
                      features que elijas del formulario. Se usa useContext,
                      Tailwindcss, custom hooks, etc.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 py-4 mt-2">
                    <a
                      href="https://github.com/ivanosquis10/autoinsurance-quotes-project"
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
                      href="https://autoinsurance-quotes-ivanosquis.vercel.app/"
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
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-md shadow-green-400 rounded-md hover:bg-gray-900">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Proyecto CMR</h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="shadow shadow-green-600 px-1.5 md:px-5 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
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
            {/* Card 5 Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
