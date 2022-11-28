import { Box } from "@chakra-ui/react";
import React from "react";
import Profile from "../components/Profile/Profile";
// import { Circle, Donut } from "react-awesome-shapes";
// import { motion } from "framer-motion";
import Card from "../components/Card/Card";
import Bcard from "../components/Card/Bcard";
import GifCard from "../components/Card/GifCard";
const Home = () => {
  return (
    <Box
      // w={"100vw"}
      h={"100vh"}
      position={"relative"}
      backgroundColor="black"
      id="home"
    >
      {/* <Box className="Shapes" position={"absolute"} bottom={["25%","2%"]} left={['-5%',"-8%"]}>
        <Circle
          color="linear-gradient(90deg, #11998e 0%, #38ef7d 100%)"
          size={["8rem","8rem", "12rem", "12rem", "15rem"]}
          zIndex={2}
          position={"relative"}
          className={"shapes"}
        />
      </Box>

      <Box className="Shapes" position={"absolute"} top={"15%"} left={"1%"}>
        <Circle
          color="linear-gradient(90deg, #ffc3a0 0%, #ffafbd 100%)"
          size={["5rem", "6rem", "6rem", "7rem"]}
          zIndex={2}
          position={"relative"}
          className={"smallshapes"}
        />
      </Box> */}

      <Box position={"absolute"} left={['50%','50%','0%','0%']} transform={['translate(-45%)','translate(-45%)','none','none']} top={['60vh','73vh','36%',"36%"]} >
        {/* Hello Im Nirmal  */}
        <Profile />
      </Box>


      <Box position={"absolute"} left={["53%","52%",'50%','50%',"50%","50%"]} top={"25%"}
      transform={["translate(-50%)"]}
      >
        {/* Profile photo  */}
        <Card />
        
      </Box>

      <Box
        position={"absolute"}
        bottom={["7%"]}
        left={"50%"}
        transform={["translate(-50%)"]}
        w={['90vw','50vw','50vw','50vw']}
      >
        {/* MERN  */}
        <Bcard />
      </Box>

     <Box
     display={['none','none','none','block']}
    >
      {/* Typewriter effect  */}
      <GifCard/>
     </Box>

    </Box>
  );
};

export default Home;
