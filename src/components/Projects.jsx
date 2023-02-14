import 'boxicons';
import controlPresupuesto from '../assets/projectsImg/planificadorGastos.png';
import cotizadorCripto from '../assets/projectsImg/cotizadorCripto.png';
import crudPacientes from '../assets/projectsImg/crudPacientes.png';
import cotizadorAutos from '../assets/projectsImg/CotizadorAutos.png';

const Projects = () => {
  // codigo del shadow de las tecnologias usadas en los proyectos - shadow shadow-green-600 px-1.5 md:px-5
  return (
    <section>
      <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl py-8">
          <h2 className="text-center text-5xl mb-8 font-medium">
            Here my{' '}
            <span className="text-6xl font-bold text-green-500">Projects!</span>
          </h2>
          <div className="md:p-10 flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 lg:justify-around">
            {/* Card 1 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow hover:shadow-xl rounded-md ease-in-out duration-200">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Control Presupuesto</h3>
              </div>
              <div>
                <div className="sm:w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
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
                        src={controlPresupuesto}
                        alt="demo del proyecto del planificador de gastos"
                        loading="lazy"
                        title="Demo del proyecto"
                      />
                    </a>
                    <p className="md:text-base text-gray-300 mt-1 tracking-wide">
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
                      title="Repositorio Control Presupuesto"
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
                      href="https://aesthetic-lolly-990a8f.netlify.app/"
                      target="_blank"
                      title="Demo Control Presupuesto"
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
            {/* Card 1 Ends */}

            {/* Card 2 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow hover:shadow-xl rounded-md ease-in-out duration-200">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Cotizador Criptomonedas</h3>
              </div>
              <div>
                <div className="w-100 flex justify-center items-center gap-3 p-4 ">
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      StyledComponents
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer"
                      href="https://cerulean-cucurucho-e6c6c9.netlify.app"
                      target="_blank"
                    >
                      <img
                        width="350px"
                        height="200px"
                        className="bg-cover rounded-xl"
                        src={cotizadorCripto}
                        alt="demo del proyecto del cotizador de criptomonedas"
                        loading="lazy"
                        title="Demo del proyecto"
                      />
                    </a>
                    <p className="text-base text-gray-300 mt-1 tracking-wide">
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
                      title="Repositorio Cotizador Criptomonedas"
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
                      href="https://cerulean-cucurucho-e6c6c9.netlify.app"
                      target="_blank"
                      title="Demo Cotizador Criptomonedas"
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
            {/* Card 2 Ends */}

            {/* Card 3 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow hover:shadow-xl rounded-md ease-in-out duration-200">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">CRUD Pacientes</h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer"
                      href="https://cute-unicorn-4c9a71.netlify.app"
                      target="_blank"
                    >
                      <img
                        width="350px"
                        height="200px"
                        className="bg-cover rounded-xl"
                        src={crudPacientes}
                        alt="demo del proyecto de pacientes veterinarios"
                        loading="lazy"
                      />
                    </a>
                    <p className="text-base text-gray-300 mt-1 tracking-wide">
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
                      title="Repositorio Pacientes CRUD"
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
                      href="https://cute-unicorn-4c9a71.netlify.app"
                      target="_blank"
                      title="Demo Pacientes CRUD"
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
            {/* Card 3 Ends */}

            {/* Card 4 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow hover:shadow-xl rounded-md ease-in-out duration-200">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">
                  Cotizador de Seguros Autos
                </h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      ViteJS
                    </p>
                  </div>
                </div>

                <div className="w-11/12 mx-auto p-4">
                  <div className="grid md:grid-cols-2 items-center gap-3">
                    <a
                      className="cursor-pointer"
                      href="https://autoinsurance-quotes-ivanosquis.vercel.app/"
                      target="_blank"
                    >
                      <img
                        width="350px"
                        height="200px"
                        className="bg-cover rounded-xl"
                        src={cotizadorAutos}
                        alt="demo del proyecto del cotizador de seguros de autos"
                        loading="lazy"
                        title="Demo del proyecto"
                      />
                    </a>
                    <p className="text-base text-gray-300 mt-1 tracking-wide">
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
                      title="Repositorio Cotizador Autos"
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
                      href="https://autoinsurance-quotes-ivanosquis.vercel.app/"
                      target="_blank"
                      title="Demo Cotizador Autos"
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
            {/* Card 4 Ends */}

            {/* Card 5 */}
            <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow hover:shadow-xl rounded-md ease-in-out duration-200">
              <div className="text-xl md:text-3xl py-3 text-center">
                <h3 className="font-bold uppercase">Proyecto CMR</h3>
              </div>
              <div>
                <div className="w-100 mx-auto flex justify-center items-center gap-3 p-4">
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      React
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
                    <p className="text-base md:text-lg text-white font-bold">
                      Tailwindcss
                    </p>
                  </div>
                  <div className="border-2 border-green-600 px-1 rounded-md">
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
                      title="Repositorio CMR"
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
                      href="https://github.com/ivanosquis10/CRM-project"
                      target="_blank"
                      title="Repositorio CMR"
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
            {/* Card 5 Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
