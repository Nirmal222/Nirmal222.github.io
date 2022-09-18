import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";


const Contact = () => {
    return <Box height={['none',"none", "100vh", "100vh"]} pb={'2rem'} bg={"black"} id="contact">
    <Text
      fontSize={"2rem"}
      fontWeight={650}
      textAlign={"center"}
      color={"white"}
      pt={"1rem"}
    >
      Reach me here
    </Text>

    <Grid
      // templateColumns={["100%", "100%", "100%", "60% 40%"]}
      gap={["0rem", "0rem", "0rem"]}
      display={['grid','grid','none']}
      alignContent={"center"}
      w={"90vw"}
      h={"80vh"}
      m={"auto"}
      mt={"2rem"}
      bg={"black"}
    >
     
    </Grid>
  </Box>
};

export default Contact;
