import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import devey from "../utils/devey.gif";

const AboutMe = () => {
  const sets = [
    {
      id: 1,
      title: "1200+",
      tag: "Coding Hours",
    },
    {
      id: 2,
      title: "3+ Projects",
      tag: "Clean UI",
    },
    {
      id: 3,
      title: "Team Leader",
      tag: "",
    },
    {
      id: 4,
      title: "Design",
      tag: "Enthusiast",
    },
    {
      id: 5,
      title: "Innovator",
      tag: "",
    },
    {
      id: 6,
      title: "Googler",
      tag: "",
    },
  ];
  return (
    <Box
      height={["none", "none", "100vh", "100vh"]}
      pb={"2rem"}
      bg={"#110c11"}
      id="aboutme"
    >
      <Text
        fontSize={"2rem"}
        fontWeight={650}
        textAlign={"center"}
        color={"white"}
        pt={"1rem"}
      >
        Get to Know About Me
      </Text>

      {/* backup comes here */}
      <Grid
        // templateColumns={["100%", "100%", "100%", "60% 40%"]}
        // gap={["0rem", "0rem", "0rem"]}
        display={["grid", "grid", "none"]}
        alignContent={"center"}
        w={"90vw"}
        h={"80vh"}
        m={"auto"}
        mt={"2rem"}
        bg={"black"}
      >
        {/* 2nd */}
        <Flex>
          <Text
            color={"white"}
            fontSize={"13px"}
            textAlign={"center"}
            mb={"10px"}
            fontWeight={700}
          >
            Always Looking to solve problems with tech, Putting innovation at
            core of solving the problems. And a Fullstack Engineer holding
            identity from Indias's leading coding School.
          </Text>
        </Flex>
        {/* small Screen */}
        <Grid
          justifyContent={"center"}
          templateColumns={["repeat(2,1fr)", "repeat(2,1fr)"]}
          display={["grid", "grid", "none"]}
          gap={5}
        >
          {sets.map((item) => (
            <Grid
              key={item.id}
              justifyContent={"center"}
              margin={"auto"}
              alignItems={"center"}
              bg={"#4158D0"}
              backgroundImage={[
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              ]}
              w={"8rem"}
              h={"8rem"}
              borderRadius={"5%"}
            >
              <Box>
                <Text
                  className="stroke"
                  fontSize={["xl", "xl", "2xl"]}
                  textAlign={"center"}
                  color={"white"}
                  fontWeight={700}
                >
                  {item.title}
                </Text>
                <Text
                  className="stroke"
                  fontSize={["1rem", ".5rem", ".8rem"]}
                  fontWeight={700}
                  textAlign={"center"}
                  color={"white"}
                >
                  {item.tag}
                </Text>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        templateColumns={["100%", "100%", "100%", "60% 40%"]}
        gap={["4rem", "4rem", "0rem"]}
        display={["none", "none", "grid"]}
        alignContent={["center"]}
        w={"90vw"}
        h={"80vh"}
        m={"auto"}
        mt={"2rem"}
        bg={"black"}
      >
        {/* 2nd */}

        <Grid
          display={["none", "none", "block"]}
          templateRows={"20% 80%"}
          gap={"1rem"}
          // border={["2px solid white"]}
        >
          {/* 3rd */}
          <Flex
            alignItems={"center"}
            // display={["none", "none", "none", "flex"]}
            justifyContent={"center"}
          >
            <Text
              // border={'1px solid white'}

              color={"white"}
              fontSize={["xl", "xl", "lg", "xl"]}
              fontWeight={600}
              textAlign={"center"}
            >
              Always Looking to solve problems with tech, Putting innovation at
              core of solving the problems. And a Fullstack Engineer holding
              identity from Indias's leading coding School.
            </Text>
          </Flex>
          {/* 3rd */}
          <Grid
            // border={'1px solid green'}
            justifyContent={"center"}
            templateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
            ]}
            // gap={['1rem','1rem','1rem','']}
            height={"100%"}
            alignItems={"center"}
          >
            {sets.map((item) => (
              <Grid
                key={item.id}
                justifyContent={"center"}
                margin={"auto"}
                alignItems={"center"}
                bg={"#4158D0"}
                backgroundImage={[
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                ]}
                w={["15rem", "6rem", "6rem", "6rem","10rem"]}
                h={["15rem", "6rem", "6rem", "6rem","10rem"]}
                borderRadius={"5%"}
              >
                <Box>
                  <Text
                    className="stroke"
                    fontSize={["lg", "xl", "xl"]}
                    textAlign={"center"}
                    color={"white"}
                    fontWeight={700}
                  >
                    {item.title}
                  </Text>
                  <Text
                    className="stroke"
                    fontSize={["xl", "xl", "xl"]}
                    fontWeight={700}
                    textAlign={"center"}
                    color={"white"}
                  >
                    {item.tag}
                  </Text>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* 2nd */}
        <Grid
          mt={10}
          alignItems={"center"}
          display={["none", "none", "none", "grid"]}
        >
          <Image
            m={"auto"}
            w={["350px", "350px", "400px", "750px"]}
            src={`${devey}`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
