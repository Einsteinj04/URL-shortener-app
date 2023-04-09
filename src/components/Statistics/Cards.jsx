import React from 'react'

const Cards = ({icon,title,text, position}) => {
  return (
    <div>
      <div className={`bg-white relative ${position} px-4 py-10 rounded mx-5`}>
        <div className="absolute -top-10 bg-black rounded-full">
          <img src={icon} className="p-4" />
        </div>
        <h3 className="text-center md:text-left text-2xl font-bold mb-6">{title}</h3>
        <p className="text-center md:text-left">{text}</p>
      </div>
    </div>
  );
}

export default Cards