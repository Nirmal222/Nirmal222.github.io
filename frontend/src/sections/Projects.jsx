import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import PCard from "../components/Card/PCard";
import shop from '../utils/shop.JPG'
// const projects = [
//   {
//     id:1,
//     image: myntra,
//   }
// ]

const Projects = () => {
  return <Box height={['none',"none", "100vh", "100vh"]} pb={'2rem'} bg={"#110c11"} id="projects">
  <Text
    fontSize={"2rem"}
    fontWeight={650}
    textAlign={"center"}
    color={"white"}
    pt={"1rem"}
  >
    Here are my works
  </Text>

  <Grid
    p={'1rem'}
    templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)']}
    gap={["1rem", "0rem", "0rem"]}
    justifyContent={'center'}
    alignContent={"center"}
    w={"90vw"}
    h={['none',"80vh"]}
    m={"auto"}
    mt={"2rem"}
    bg={"black"}
  >
    <PCard url={'https://apple.co/3BoqLG4'} title={'tv.Apple.com clone'}/>
    <PCard url={'https://bit.ly/3xt0tkX'} title={'Myntra clone'}/>
    <PCard url={shop} title={'shop.com clone'}/>
  </Grid>
</Box>
};

export default Projects;
