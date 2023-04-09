import React from 'react'

import Shortener from './Shortener'
import Cards from "./Cards";
import Icon1 from '../../images/icon-brand-recognition.svg'
import Icon2 from '../../images/icon-detailed-records.svg'
import Icon3 from "../../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="bg-gray relativ px-5 sm:px-8 z-10 ">
      <div className="absolut left-0 right-0 relative -top-10 m-auto md:w-[60%] w-[90%] z-10">
        <Shortener />
      </div>
      <div className="">
        <h2 className="text-center md:text-4xl font-bold text-3xl md:p-6 p-3 md:pt-[5%] sm:pt-[10%] pt-[25%]">
          Advanced Statistics
        </h2>
        <p className="text-center text-slate md:text-xl max-w-[500px] mx-auto pb-10">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex md:flex-row flex-col md:gap-6 gap-20 relativ">
          <Cards
            icon={Icon1}
            title={"Brand Recognition"}
            text={
              "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. "
            }
          />
          <Cards
            icon={Icon2}
            title={"Detailed Records"}
            text={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
            position={"top-[40%]"}
          />
          <Cards
            icon={Icon3}
            title={"Fully Customizable"}
            text={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            position={"top-[80%]"}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics