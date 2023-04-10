import React,{useState} from 'react'
import { motion } from "framer-motion";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

const Toggletheme = ({ setDarkMode }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleDarkMode = () => {
    setIsLightTheme((prevMode) => !prevMode)
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className="relative flex items-center justify-center w-16 h-8 rounded-full bg-gray-300 border-white border-2 md:mx-10 mx-2 cursor-pointer"
      onClick={handleDarkMode}
    >
      <motion.div
        animate={{ x: isLightTheme ? 0 : 18 }}
        className="absolute w-6 h-6 rounded-full shadow bg-white z-30 drop-shadow-lg"
        style={{ left: isLightTheme ? "1px" : "17px", top: "1px" }}
      ></motion.div>
      <motion.div
        className="absolute w-full h-full rounded-full bg-gray-600 bg-verydarkblue"
        animate={{
          backgroundColor: isLightTheme ? "hsl(0 ,0%, 75%)" : "#2c3e50",
          scale: isLightTheme ? 1 : 0.9,
          rotate: isLightTheme ? -1 : -0.9,
          borderRadius: isLightTheme ? "35%" : "35%",
        }}
      ></motion.div>
    </div>
  );
};

export default Toggletheme