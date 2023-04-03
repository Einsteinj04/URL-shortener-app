import React from "react";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <div className="my-10 mx-8">
      <div className="flex gap-x-14 items-center text-lg font-sans">
        <div>
          <img src={Logo} />
        </div>
        <div></div>
        <div className="grow text-gray ">
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
  );
};

export default Navbar;
