import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { BsCalendarDay } from "react-icons/bs"
import { GrProjects } from "react-icons/gr"
import { BiCodeAlt } from "react-icons/bi"

// const stats = [
//   {
//     id:1,
//     title: "Months",
//     num: 7,
//     icon: "BsCalendarDay",
//   },
//   {
//     id:2,
//     title: "Projects Done",
//     num: "3+",
//     icon: "GrProjects",
//   },
//   {
//     id:3,
//     title: "Hours of Coding",
//     num: "1200+",
//     icon: "BiCodeAlt",
//   },
// ];

const Stats = () => {
  return (
    <Grid
      justifyContent={'center'}
      color={"white"}
      w={"60vw"}
      fontSize={["xl", "xl", "4xl"]}
      fontWeight={"700"}
      margin={"auto"}
      textAlign={'center'}
    >
      Github Stats
      <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)']} gap={'1rem'} 
      color={'orange'}>
      <img margin={'auto'} src="https://github-readme-streak-stats.herokuapp.com/?user=nirmal222&" alt="" />
      <img src="https://github-readme-stats.vercel.app/api?username=nirmal222&show_icons=true&locale=en" alt="" />
      </Grid>
    </Grid>
  );
};

export default Stats;


{/* <Grid
        justifyContent={"center"}
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={['1rem','1rem','1rem','']}
        height={"100%"}
        alignItems={"center"}
      >
        {stats.map((item)=><Grid
          key={item.id}
          justifyContent={"center"}
          margin={"auto"}
          alignItems={"center"}
          bg={"#4158D0"}
          backgroundImage={[
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
          ]}
          w={["8rem", "6rem", "10rem"]}
          h={["8rem", "6rem", "10rem"]}
          borderRadius={"5%"}
        >
            
           <Box>
           <Text>{item.num}</Text>
            <Text fontSize={['xl','xl']} >{item.title}</Text> 
           </Box>
        </Grid>)}
</Grid> */}