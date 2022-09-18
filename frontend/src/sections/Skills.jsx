import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaNpm } from "react-icons/fa";
import { FiFramer } from "react-icons/fi"
import { TbApi } from "react-icons/tb"
import { SiMongodb, SiExpress, SiChakraui, SiJavascript, SiRedux, SiPostman, SiFastapi, SiNpm } from "react-icons/si";
import { IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
const Skills = () => {
  return <Box h={['','','100vh','100vh']} pb={['2rem']} bg={"black"} id='skills' >
    <Text textAlign={'center'}  fontWeight={['700']} fontSize={['2rem']} className={'skillsTitle'}>SKILLS</Text>
    <Box mt={5}>
      {/* frontend */}
      <Box>
        <Text borderBottom={'5px solid red'} w={['fit-content']} m={['auto']} textAlign={'center'} fontSize={['xl']} fontWeight={['700']} className="frontendTitle">FrontEnd</Text>
        <Box w={['80vw']} m={['auto']} mt={10}>
        <Grid
        mt={[5]}
        className="frontendSkills"
        templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}
        justifyContent={['center']}
        gap={['2.5rem']}
        fontSize={['5rem','5rem','5rem','4rem']}
      >
        <li>
          <IoLogoHtml5 />
        </li>
        <li>
          <IoLogoCss3 />
        </li>
        <li>
          <SiJavascript />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <SiChakraui />
        </li>
        <li>
          <FiFramer />
        </li>
        <li>
          <SiRedux />
        </li>
        <li>
          <SiPostman />
        </li>
        </Grid>
        </Box>
      </Box>
      {/* Backend */}
      <Box mt={50}>
        <Text borderBottom={'5px solid red'} m={['auto']} w={['fit-content']} textAlign={'center'} fontSize={['xl']} fontWeight={[700]} className="backendTitle">BackEnd</Text>
        <Box w={['80vw']} m={['auto']} mt={10}>
        <Grid
        mt={[5]}
        className="backendSkills"
        templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}
        justifyContent={['center']}
        gap={['2.5rem']}
        fontSize={['5rem','5rem','5rem','4rem']}
      >
        <li>
          <SiMongodb />
        </li>
        <li>
          <SiExpress />
        </li>
        <li>
          <IoLogoNodejs />
        </li>
        <li>
          <SiFastapi />
        </li>
        <li>
          <FaNpm />
        </li>
        <li>
          <TbApi />
        </li>
        </Grid>
        </Box>
      </Box>


    </Box>
  </Box>;
};

export default Skills;
