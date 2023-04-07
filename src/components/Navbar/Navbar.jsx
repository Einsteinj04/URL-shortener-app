import React, {useState} from "react";
import Logo from "../../images/logo.svg";
import { IconContext } from "react-icons";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <div>
        <div className="flex gap-x-14 items-center text-lg font-sans">
          <div>
            <img src={Logo} />
          </div>
          <div className="grow">
            <button
              className={`fixed top-8 sm:right-8 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white focus:outline-none md:hidden`}
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
                <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
                  <div>
                    <FiX className="ml-2 text-xl" />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
                  <div>
                    <FiMenu className="ml-2 text-xl" />
                  </div>
                </IconContext.Provider>
              )}
            </button>
            <motion.ul
              className={`fixed rounded top-1/3 p-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkviolet text-base w-[90%] m-auto md:hidden`}
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

            <div className="md:flex items-center hidden">
              <div className="grow text-gray">
                <ul className="flex gap-x-10">
                  <li className="hover:text-black">
                    <a href="#">Features</a>
                  </li>
                  <li className="hover:text-black">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="hover:text-black">
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </div>
              <div className="w-48 flex justify-between cursor-pointer">
                <button className="text-gray hover:text-black">Login</button>
                <button className="bg-cyan rounded-full px-6 py-2 text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
