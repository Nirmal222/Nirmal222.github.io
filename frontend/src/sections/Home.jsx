import { Box } from "@chakra-ui/react";
import React from "react";
import Profile from "../components/Profile/Profile";
// import { Circle } from "react-awesome-shapes";
const Home = () => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      backgroundColor="black"
      position={'relative'}
    >

        <Box className="mainContent-Home">
          <Box>
                <Profile/>
          </Box>
          <Box></Box>
        </Box>


    </Box>
  );
};

export default Home;


{/* <Circle
            color="linear-gradient(90deg, #11998e 0%, #38ef7d 100%)"
            size={['150px', '150px', '180px', '180px']}
            zIndex={2}
        /> */}