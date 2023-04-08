import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="my-10 sm:mx-20 mx-5">
        <Hero />
      </div>
      <Statistics />
    </div>
  );
}

export default App