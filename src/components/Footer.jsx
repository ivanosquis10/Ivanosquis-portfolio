import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id="footer" className="mx-auto w-11/12 px-10 py-5">
      <div>
        <div className="flex flex-col text-center">
          <p className="text-sm leading-none text-gray-200 mt-4 font-bold">
            Copyright© 2023
          </p>
          <p className="text-xs leading-none text-gray-300 mt-4">
            All rights reserved
          </p>
          <div className="flex items-center justify-center gap-x-3 mt-8">
            <div>
              <a href="https://twitter.com/ivanosquis13" target="_blank">
                <box-icon
                  type="logo"
                  name="twitter"
                  color="#1DA1F2"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
            </div>
            <div>
              <a href="https://github.com/ivanosquis10" target="_blank">
                <box-icon
                  type="logo"
                  name="github"
                  color="gray"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
            </div>
            <div>
              <a
                href="https://discordapp.com/users/Ivanosquis10#5178"
                target="_blank"
              >
                <box-icon
                  type="logo"
                  name="discord"
                  color="#5865F2"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
            </div>
            <div>
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <box-icon
                  type="solid"
                  name="chevrons-up"
                  color="white"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
