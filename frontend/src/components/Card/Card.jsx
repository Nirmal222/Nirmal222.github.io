import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import nirmal from '../../utils/nirmal.jpg'
const Card = () => {
  return (
    <Box
      display={["flex"]}
      // w={["30vw"]}
      justifyContent={["space-between"]}
      alignItems={["center"]}
    >   
        <Box>
          <Image
            borderRadius={"50%"}
            src={`${nirmal}`}
            w={['17rem','15rem','14rem',"13rem"]}
            alt="Nirmal Kumar"
            bg='linear-gradient(90deg, #822626 0%, #dd1818 100%)'
          />
          <Text
            fontSize={['1.5rem',"2rem"]}
            color={"white"}
            textAlign={"center"}
            fontWeight={["500"]}
            mt={['10px']}
          >
            Nirmal Kumar
          </Text>
        </Box>
      </Box>
  );
};

export default Card;
