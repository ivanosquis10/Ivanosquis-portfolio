import { useState } from 'react';
import { Link } from 'react-scroll';
import heart from '../assets/heart.svg';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleMobileMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <nav className="navbar" id="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center mt-5 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleMobileMenu}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center mt-5 sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center gap-3 text-2xl">
              <img className="h-6 w-auto" src={heart} alt="heart" />
              <a className="font-black" href="#">
                Ivanosquis!!
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center text-5xl space-x-4">
                <Link
                  to="nav"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="bg-gray-900 text-white py-1 px-2  border border-green-600  rounded-md text-lg font-bold hover:text-green-500 ease-in-out duration-200"
                  aria-current="page"
                >
                  Home!
                </Link>

                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  className="bg-gray-900 text-white rounded-md text-lg font-bold hover:text-green-500 ease-in-out duration-200"
                >
                  About me!
                </Link>

                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="bg-gray-900 text-white  rounded-md text-lg font-bold hover:text-green-500 ease-in-out duration-200"
                >
                  Skills!
                </Link>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  className="bg-gray-900 text-white  rounded-md text-lg font-bold hover:text-green-500 ease-in-out duration-200"
                >
                  Projects!
                </Link>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  className="bg-gray-900 text-white rounded-md text-lg font-bold hover:text-green-500 ease-in-out duration-200"
                >
                  Contact me!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`${menu ? 'hidden' : 'block'} sm:hidden `}
        id="mobile-menu"
      >
        <div className="space-y-4 px-5 pt-2 pb-3 text-center">
          <Link
            to="nav"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="bg-gray-900 text-white hover:text-green-500 border border-green-600 block px-3 py-2 rounded-md text-base font-medium "
            aria-current="page"
          >
            Home!
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            About me!
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Skills!
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects!
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
