import React from "react";

import Shortener from "./Shortener";
import Cards from "./Cards";
import Boost from "../Boost/Boost";
import Icon1 from "../../images/icon-brand-recognition.svg";
import Icon2 from "../../images/icon-detailed-records.svg";
import Icon3 from "../../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="bg-gray z-10 pb-20 h-fit sm:px-10 px-5 dark:bg-verydarkblue">
      <div className=" left-0 right-0 relative -top-10 m-auto md:w-[60%] w-[90%] z-10">
        <Shortener />
      </div>
      <div className="w-full ">
        <h2 className="text-center md:text-4xl font-bold text-3xl md:p-6 p-3 md:pt-[5%] pt-[10%] relative dark:text-white text-[#34313D]">
          Advanced Statistics
        </h2>
        <p className="text-center text-slate md:text-xl max-w-[500px] mx-auto pb-10 dark:text-gray">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex md:flex-row flex-col md:gap-6 gap-20 md:mt-[5%] mt-[10%] md:h-[400px] h-fit">
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
            position={"top-[20%]"}
          />
          <Cards
            icon={Icon3}
            title={"Fully Customizable"}
            text={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            position={"top-[40%]"}
          />
        </div>
        {/* <Boost /> */}
      </div>
    </div>
  );
};

export default Statistics;
