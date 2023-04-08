import React from 'react'

const Cards = ({icon,title,text, position}) => {
  return (
    <div>
      <div className={`bg-white relative ${position} px-4 pt-10 pb-6 rounded`}>
        <div className="absolute -top-1/4 bg-black rounded-full">
          <img src={icon} className="p-4" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Cards