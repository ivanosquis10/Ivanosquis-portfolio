import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="footer" className="mx-auto w-11/12 p-16">
      <div>
        <div className="flex flex-col text-center">
          <p className="text-lg leading-none text-gray-400 mt-4 font-bold">
            Ivanosquis - Copyright © 2023
          </p>
          <p className="text-md font-medium leading-none text-gray-500 mt-4">
            All rights reserved
          </p>
          <div className="flex items-center justify-center gap-x-4 mt-12">
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
              <Link to="nav" spy={true} smooth={true} offset={0} duration={500}>
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
  );
};
export default Footer;
