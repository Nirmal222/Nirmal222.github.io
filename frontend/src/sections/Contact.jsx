import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import Form from "../components/contact/Form";
import SocialMedia from "../components/contact/SocialMedia";

const Contact = () => {
    return <Grid templateRows={'10% 70% 20%'} justifyContent={'center'} alignItems={'center'} bg={"black"} id="contact">
    <Text
      // position={'absolute'}
      // top={'5rem'}
      // left={'50%'}
      // transform={'translate(-50%)'}
      fontSize={"2rem"}
      fontWeight={650}
      textAlign={"center"}
      pt={5}
      color={"white"}
    >
      Reach me here
    </Text>
      <Form/>
      <SocialMedia border={'1px solid white'}/>
  </Grid>
};

export default Contact;
