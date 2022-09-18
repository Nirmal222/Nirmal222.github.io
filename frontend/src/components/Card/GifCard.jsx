import { Box, Image } from "@chakra-ui/react";
import React from "react";

const GifCard = () => {
  return (
    <Box>
        <Image
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
    w={"15vw"} src='https://thumbs.gfycat.com/HastyAntiqueBetafish-size_restricted.gif' alt='animation'/>
    {/* <Image
    position={"absolute"}
    borderRadius={['50%']}
    top={["55%"]}
    right={"5%"}
    w={"8vw"} src='https://www.simontechway.com/wp-content/uploads/2020/04/web-design.gif' alt='animation'/> */}
    </Box>
  );
};

export default GifCard;
