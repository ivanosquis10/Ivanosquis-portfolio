const Contact = () => {
  const pdf =
    'https://drive.google.com/file/d/1YcsrUDjTZThhxPjmXIjHk2GjXSW5k8LR/view?usp=share_link';

  return (
    <div id="contact" className="w-11/12 mx-auto pt-16">
      <div className="lg:flex mb-10">
        <div className="w-11/12 mx-auto p-10 rounded shadow-md">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-5xl text-3xl pb-4 text-white font-bold">
              Contact with <span className="text-green-500">me!!</span>
            </h1>
            <p className="text-xl text-gray-400 pb-8 leading-relaxed font-medium lg:pr-4">
              ¿Tiene alguna pregunta? ¿Está interesado? ¿Tiene alguna sugerencia
              o simplemente quiere saludarnos? Póngase en contacto conmigo.
              Estaré encantado de hablar.
            </p>
            <p className="text-xl text-gray-400 pb-8 leading-relaxed font-medium lg:pr-4">
              Do you have any questions, are you interested? Have a suggestion
              or just want to say hello? Please contact me. I'll be happy to
              talk to you.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 shadow rounded-md py-1 sm:w-2/5 sm:px-2">
                <box-icon
                  name="envelope"
                  type="solid"
                  size="sm"
                  color="white"
                  animation="tada-hover"
                ></box-icon>
                <a
                  href="mailto:ivanosquis10.12@gmail.com"
                  target="_blank"
                  className="text-white text-lg "
                >
                  ivanosquis10.12@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-1 shadow rounded-md py-1  sm:w-2/5 sm:px-2">
                <box-icon
                  name="twitter"
                  type="logo"
                  size="sm"
                  color="#1DA1F2"
                  animation="tada-hover"
                ></box-icon>
                <a
                  href="https://twitter.com/ivanosquis13"
                  target="_blank"
                  className="text-white text-lg "
                >
                  @Ivanosquis13
                </a>
              </div>

              <div className="flex items-center gap-1 shadow rounded-md py-1  sm:w-2/5 sm:px-2">
                <box-icon
                  name="discord"
                  type="logo"
                  size="sm"
                  color="#5865F2"
                  animation="tada-hover"
                ></box-icon>
                <a
                  href="https://discordapp.com/users/Ivanosquis10#5178"
                  target="_blank"
                  className="text-white text-lg "
                >
                  Ivanosquis10#5178
                </a>
              </div>
              <div className="w-fit mt-5 p-4 rounded-md text-center border hover:bg-green-600 ease-in-out duration-300 cursor-pointer">
                <a
                  href={pdf}
                  target="_blank"
                  className="font-bold"
                  rel="noopener noreferrer"
                >
                  Descargar CV / Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
