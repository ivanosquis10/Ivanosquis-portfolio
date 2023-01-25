import Button from './Button';
import pdf from '../assets/ejemplo-cv.pdf';
import 'boxicons';

const Contact = () => {
  return (
    <div id="contact" className="w-11/12 mx-auto pt-16">
      <div className="lg:flex mb-10">
        <div className="w-11/12 mx-auto p-5 md:p-10 rounded shadow-md">
          <div className="xl:w-5/6 xl:px-0  mx-auto">
            <h2 className="text-center text-4xl md:text-6xl md:pb-4 pb-3 text-white font-bold uppercase">
              Contact <span className="text-green-500">me!!</span>
            </h2>
            <p className="text-md md:text-xl text-gray-400 pb-8 leading-relaxed font-medium lg:pr-4">
              ¿Tiene alguna pregunta? ¿Está interesado? ¿Tiene alguna sugerencia
              o simplemente quiere saludarnos? Póngase en contacto conmigo.
              Estaré encantado de hablar.
            </p>
            <p className="text-md md:text-xl text-gray-400 pb-8 leading-relaxed font-medium lg:pr-4">
              Do you have any questions, are you interested? Have a suggestion
              or just want to say hello? Please contact me. I'll be happy to
              talk to you.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 shadow rounded-md py-1 sm:w-2/5 sm:px-2">
                <box-icon
                  type="logo"
                  name="gmail"
                  size="sm"
                  color="white"
                ></box-icon>
                <a
                  href="mailto:ivanosquis10.12@gmail.com"
                  target="_blank"
                  className="text-white text-sm md:text-lg "
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
                  className="text-white text-md md:text-lg "
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
                  className="text-white text-md md:text-lg "
                >
                  Ivanosquis10#5178
                </a>
              </div>
              <div className="w-100 text-xl md:text-2xl mt-5 p-4 rounded-md text-center border hover:bg-green-600 ease-in-out duration-300 hover:cursor-pointer">
                <Button src={pdf} text="Ver CV - View CV" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
