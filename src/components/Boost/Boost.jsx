import React from 'react'
import Img from '../../images/bg-boost-desktop.svg'

const Boost = () => {
  return (
      <div className="md:p-8 p-3 bg-verydarkblue rounded z-10 md:gap-6 gap-3 relative max-h-[300%] w-full">
        <img
          src={Img}
          className="absolute overflow-hidden h-full w-full top-0 right-0 left-0 bottom-0 rounded"
      />
      <h4 className='text-white relative sm:text-4xl text-3xl font-bold text-center md:my-10 my-5'>Boost your links today</h4>
        <button
          className="bg-cyan text-white relative flex  rounded-full md:px-8 px-6 md:py-3 py-2 self-start  mx-auto md:mb-10 mb-5"
        >
          Get Started
        </button>
      </div>
  );
}

export default Boost