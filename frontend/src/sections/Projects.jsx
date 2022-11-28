import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import PCard from "../components/Card/PCard";
import GitCalender from "../components/GitCalender/GitCalender";
import Stats from "../components/Statistics/Stats"
import shop from '../utils/shop.JPG'
import tt from '../utils/tt.JPG'
// const projects = [
//   {
//     id:1,
//     image: myntra,
//   }
// ]

const Projects = () => {
  return <Box pb={'2rem'} bg={"#110c11"} id="projects">
  <Text
    fontSize={"2rem"}
    fontWeight={650}
    textAlign={"center"}
    color={"white"}
    pt={"1rem"}
  >
    Here are my works
  </Text>
  <Box
  pb={3}
  bg={"black"}>
  <Grid
    p={'1rem'}
    templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)']}
    rowGap={["1rem", "1rem", "1rem"]}
    justifyContent={'center'}
    alignContent={"center"}
    w={"90vw"}
    // h={['none',"80vh"]}
    m={"auto"}
    mt={"2rem"}
  >
    <PCard url={'https://apple.co/3BoqLG4'} techStack={["React","Nodejs"]} wurl={'https://the-great-nirmalkumargurajada-gmail-com-site-2d3cb.netlify.app/'} gurl={'https://github.com/Nirmal222/foregoing-silver-4856/tree/main/project-tv.apple.com'} descp={'A fully functional website similar to Apple tv website and a Complete REACT Project with a bit of Backend.'} title={'tv.Apple.com clone'}/>
    <PCard url={'https://bit.ly/3xt0tkX'} techStack={["HTML","CSS","Java Script"]} wurl={'https://frolicking-torrone-694d2a.netlify.app/'} gurl={'https://github.com/sumitraghavwork/mytro-di-myntra'} descp={'A Frontend Myntra clone website and a Complete Bootstraped with HTML,CSS and Javascript.'}  title={'Myntra clone App'}/>
    <PCard url={shop} techStack={["HTML","CSS","Javascript"]} wurl={'https://neon-bonbon-96b39b.netlify.app/'} gurl={'https://github.com/Nirmal222/obscene-week-4294'} descp={'Built the entire Project with a team of 5 using pure HTML, CSS and Javascript'} title={'shop.com clone'}/>
    <PCard url={tt} techStack={["React","MongoDB","Nodejs","Express"]} wurl={'https://wondrous-stardust-501a11.netlify.app/'} gurl={'https://github.com/Nirmal222/obscene-week-4294'} descp={'A Project tracking application which comes with features like Kanban, Tasks etc..'} title={'Tracking Time Clone'}/>
  </Grid>
  <GitCalender/>
  {/* <Calender/> */}
  <Stats/>
  </Box>
</Box>
};

export default Projects;
