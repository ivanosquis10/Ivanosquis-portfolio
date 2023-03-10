import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const handleMobileMenu = () => setMenu(!menu)

  return (
    <header class="relative w-full" name="header" id="header">
      <nav className="fixed top-0 left-0 z-20 w-full px-6 transition-all duration-100 lg:px-12 py-3 shadow backdrop-blur bg-slate-800/20">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative h-12 flex flex-col items-center xs:flex-row justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleMobileMenu}
              >
                <svg
                  class="block h-6 w-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* menu large */}
            <div class="lg:w-full flex items-center justify-between">
              {/* logo */}
              <div class="flex flex-shrink-0 items-center sm:items-stretch cursor-pointer">
                <Link
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <img
                    width="50"
                    height="50"
                    src="./logos/logo-iv-3.svg"
                    alt="logo del portafolio"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* links */}
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex items-center space-x-4">
                  <Link
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white py-1 px-2 shadow rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                    aria-current="page"
                  >
                    Home
                  </Link>

                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white py-1 px-2 shadow rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                  >
                    About
                  </Link>

                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="text-white py-1 px-2 shadow rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                  >
                    Skills
                  </Link>

                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="text-white py-1 px-2 shadow rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                  >
                    Projects
                  </Link>

                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="text-white py-1 px-2 shadow rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* menu mobile */}
        <div
          className={`${!menu ? 'hidden' : 'block'} h-max sm:hidden `}
          id="mobile-menu"
        >
          <div class="space-y-4 px-2 pt-2 pb-3 text-center mt-5">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block text-white py-1 px-2 hover:bg-slate-800/50 shadow shadow-green-800/80 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
              aria-current="page"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block text-white py-1 px-2 hover:bg-slate-800/50 shadow shadow-green-800/80 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
            >
              About
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="block text-white py-1 px-2 hover:bg-slate-800/50 shadow shadow-green-800/80 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
            >
              Skills
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="block text-white py-1 px-2 hover:bg-slate-800/50 shadow shadow-green-800/80 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
            >
              Projects
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="block text-white py-1 px-2 hover:bg-slate-800/50 shadow shadow-green-800/80 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
