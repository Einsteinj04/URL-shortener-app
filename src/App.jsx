import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="my-10 sm:mx-20 mx-5">
        <Hero />
      </div>
      <Statistics />
      <Boost />
      <Footer/>
    </div>
  );
};

export default App;
