import React from 'react'
import {ReactComponent as Logo}  from '../../images/logo.svg'
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
// import { ReactComponent as Twitter} from "../../images/icon-twitter.svg";


const Footer = () => {
  return (
    <div className="bg-verydarkviolet grid md:grid-cols-3 grid-cols-1 md:p-20 sm:p-10 p-10 gap-x-60 gap-y-20">
      <div>
        <Logo className="text-white mx-auto fill-white" />
      </div>
      <div className="flex md:flex-row flex-col grow gap-x-20 gap-y-10 mx-auto">
        <section>
          <div className="text-white font-medium text-xl mb-5 text-center md:text-left">
            Features
          </div>
          <p className="text-gray hover:text-cyan cursor-pointer whitespace-nowrap text-center md:text-left">
            Link Shortening
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Branded
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Analytics
          </p>
        </section>
        <section>
          <div className="text-white font-medium text-xl mb-5 text-center">
            Resources
          </div>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Blog
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Developers
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Support
          </p>
        </section>
        <section>
          <div className="text-white font-medium text-xl mb-5 text-center md:text-left">
            Company
          </div>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            About
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Our Team
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center md:text-left">
            Careers
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer md:text-left text-center">
            Contact
          </p>
        </section>
      </div>
      <div className="flex gap-3 md:h-[40px] h-[20px] mx-auto items-center">
        <Facebook className="hover:fill-cyan cursor-pointer fill-white hover:scale-110 ease-in-out duration-300 " />
        <Twitter className="hover:fill-cyan cursor-pointer fill-white hover:scale-110 ease-in-out duration-300 " />
        <Pinterest className="hover:fill-cyan cursor-pointer fill-white hover:scale-110 ease-in-out duration-300 " />
        <Instagram className="hover:fill-cyan cursor-pointer fill-white hover:scale-110 ease-in-out duration-300 " />
      </div>
    </div>
  );
}

export default Footer