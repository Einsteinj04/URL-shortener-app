import React from 'react'

const Cards = ({icon,title,text, position}) => {
  return (
    <div>
      <div
        className={`bg-white relative ${position} px-4 py-10 rounded mx-5 drop-shadow-lg dark:bg-verydarkviolet dark:drop-shadow-md dark:shadow-md dark:shadow-gray`}
      >
        <div className="absolute -top-10 bg-black rounded-full dark:bg-verydarkviolet drop-shadow-lg">
          <img src={icon} className="p-4" />
        </div>
        <h3 className="text-center md:text-left text-2xl font-bold mb-6 dark:text-white text-[#34313D]">
          {title}
        </h3>
        <p className="text-center md:text-left dark:text-gray">{text}</p>
      </div>
    </div>
  );
}

export default Cards