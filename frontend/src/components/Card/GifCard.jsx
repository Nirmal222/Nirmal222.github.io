import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect"
const GifCard = () => {
  return (
    <Box>
        {/* <Image
      position={"absolute"}
      borderRadius={['20px']}
      top={["30%"]}
      right={"5%"}
      w={"25vw"}
      src="https://www.fegno.com/wp-content/uploads/2022/03/web-development-company-in-kochi.gif"
      alt="Developer"
    />
    <Image
    position={"absolute"}
    borderRadius={['20px']}
    top={["55%","55%","45%"]}
    right={["20%"]}
    w={"15vw"} src='https://thumbs.gfycat.com/HastyAntiqueBetafish-size_restricted.gif' alt='animation'/> */}
    <Box
    position={"absolute"}
    borderRadius={['20px']}
    top={["45%"]}
    right={"5%"}
    fontSize={['3xl','4xl','4xl']}
    fontWeight={700}
    color={'white'}
    >
    <Typewriter
     options={{autoStart:true,loop:true,delay:30,
     strings:["MERN Stack Developer.","Design Enthusiast.","Innovator."]}}/>
    </Box>
    </Box>
  );
};

export default GifCard;
