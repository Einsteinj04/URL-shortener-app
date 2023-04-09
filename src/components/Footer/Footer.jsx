import React from 'react'
import Logo  from '../../images/logo.svg'
import Facebook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Twitter from "../../images/icon-twitter.svg";
// import { ReactComponent as Twitter} from "../../images/icon-twitter.svg";


const Footer = () => {
  return (
    <div className="bg-verydarkviolet grid md:grid-cols-3 grid-cols-1 md:p-20 sm:p-10 p-10 gap-x-60 gap-y-20">
      <div>
        <img src={Logo} className="text-white fill-current mx-auto" />
      </div>
      <div className="flex md:flex-row flex-col grow gap-x-20 gap-y-10 mx-auto">
        <section>
          <div className="text-white font-medium text-xl mb-5 text-center">Features</div>
          <p className="text-gray hover:text-cyan cursor-pointer whitespace-nowrap text-center">
            Link Shortening
          </p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Branded</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Analytics</p>
        </section>
        <section>
          <div className="text-white font-medium text-xl mb-5 text-center">Resources</div>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Blog</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Developers</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Support</p>
        </section>
        <section>
          <div className="text-white font-medium text-xl mb-5 texxt-center">Company</div>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">About</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Our Team</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Careers</p>
          <p className="text-gray hover:text-cyan cursor-pointer text-center">Contact</p>
        </section>
      </div>
      <div className="flex gap-3 md:h-[50px] h-[20px] mx-auto">
        <img
          src={Facebook}
          className="filter brightness-0 brightness-cyan invert"
        />
        <img src={Twitter} />
        {/* <Twitter className="text-red" /> */}
        <img src={Pinterest} className=" text-black" />
        <img src={Instagram} />
      </div>
    </div>
  );
}

export default Footer