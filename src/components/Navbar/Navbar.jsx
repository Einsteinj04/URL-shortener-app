import React, {useState} from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Toggletheme from "./Toggletheme";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="fixed dark:bg-verydarkviolet w-screen top-0 px-5 pt-8 pb-4 sm:px-8  drop-shadow-lg border-slate z-50 bg-white dark:drop-shadow-md dark:shadow-md dark:shadow-slate">
        <div className="flex gap-x-14 items-center text-lg font-sans">
          <div>
            <Logo className="background-cyan fill-[#34313D] dark:fill-white" />
          </div>
          <div className="grow">
            <motion.ul
              className={`fixed rounded top-[280%] p-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkviolet text-base w-[90%] m-auto md:hidden dark:bg-verydarkblue`}
              initial="closed"
              variants={{
                closed: { opacity: 0 },
                open: { opacity: 1 },
              }}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.li
                className="block mb-4 text-center text-white"
                variants={{
                  closed: { y: 20, opacity: 0 },
                  open: { y: 0, opacity: 1 },
                }}
                onClick={() => setIsOpen(false)}
              >
                <a href="#">Features</a>
              </motion.li>
              <motion.li
                className="block mb-4 text-center text-white"
                variants={{
                  closed: { y: 20, opacity: 0 },
                  open: { y: 0, opacity: 1 },
                }}
                onClick={() => setIsOpen(false)}
              >
                <a href="#">Pricing</a>
              </motion.li>
              <motion.li
                className="block mb-4 text-center text-white"
                variants={{
                  closed: { y: 20, opacity: 0 },
                  open: { y: 0, opacity: 1 },
                }}
                onClick={() => setIsOpen(false)}
              >
                <a href="#">Resources</a>
              </motion.li>
              <div className="bg-gray h-0.5 w-full my-6"></div>
              <motion.li
                className="block mb-4 text-center text-white"
                variants={{
                  closed: { y: 20, opacity: 0 },
                  open: { y: 0, opacity: 1 },
                }}
                onClick={() => setIsOpen(false)}
              >
                <a href="#">Login</a>
              </motion.li>
              <motion.li
                className="block mb-4 text-center text-white bg-cyan w-full rounded-full px-3 py-2"
                variants={{
                  closed: { y: 20, opacity: 0 },
                  open: { y: 0, opacity: 1 },
                }}
                onClick={() => setIsOpen(false)}
              >
                <a href="#">Sign Up</a>
              </motion.li>
            </motion.ul>

            <div className="flex items-center">
              <div className="grow md:block hidden">
                <div className=" text-gray">
                  <ul className="flex gap-x-10">
                    <li className="hover:text-black dark:hover:text-white">
                      <a href="#">Features</a>
                    </li>
                    <li className="hover:text-black dark:hover:text-white">
                      <a href="#">Pricing</a>
                    </li>
                    <li className="hover:text-black dark:hover:text-white">
                      <a href="#">Resources</a>
                    </li>
                  </ul>
                </div>
              </div>
              <Toggletheme setDarkMode={setDarkMode} className="mx-2" />
              <div className="justify-self-end">
                <button
                  className={`fixed top-6 sm:right-8 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white focus:outline-none md:hidden ease-in-out duration-300 hover:scale-110`}
                  onClick={toggleMenu}
                >
                  <motion.span
                    className="block w-6 h-0.5 bg-current"
                    variants={{
                      closed: { rotate: 0 },
                      open: { rotate: 45 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-current mt-1"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-current mt-1"
                    variants={{
                      closed: { rotate: 0 },
                      open: { rotate: -45 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                  />
                  {isOpen ? (
                    <IconContext.Provider
                      value={{ color: "gray", size: "1.5em" }}
                    >
                      <div>
                        <FiX className="ml-2 text-xl" />
                      </div>
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{ color: "gray", size: "1.5em" }}
                    >
                      <div>
                        <FiMenu className="ml-2 text-xl" />
                      </div>
                    </IconContext.Provider>
                  )}
                </button>

                <div className="w-48 md:flex justify-between cursor-pointer hidden">
                  <button className="text-gray hover:text-black dark:hover:text-white">
                    Login
                  </button>
                  <button className="bg-cyan rounded-full px-6 py-2 text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
