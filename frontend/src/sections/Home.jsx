import { Box } from "@chakra-ui/react";
import React from "react";
import Profile from "../components/Profile/Profile";
import { Circle, Donut } from "react-awesome-shapes";
const Home = () => {
  return (
    <Box w={"100vw"} h={"110vh"} backgroundColor="black" position={"relative"} id='home'>
      <Box className="mainContent-Home">
         
        <Box className="Shapes" position={'absolute'} bottom={'2%'} left={'-8%'}>
        <Circle
          color="linear-gradient(90deg, #11998e 0%, #38ef7d 100%)"
          size={["150px", "150px", "180px", "15rem"]}
          zIndex={2}
          position={"relative"}
          className={'shapes'}
        />
        </Box>

        <Box className="Shapes" position={'absolute'} top={'15%'} left={'1%'}>
        <Circle
          color="linear-gradient(90deg, #ffc3a0 0%, #ffafbd 100%)"
          size={["50px", "50px", "80px", "100px"]}
          zIndex={2}
          position={"relative"}
          className={'smallshapes'}
        />
        </Box>

        <Box>
          <Profile />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Home;
