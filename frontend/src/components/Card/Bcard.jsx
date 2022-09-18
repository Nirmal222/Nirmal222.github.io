import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const Bcard = () => {
  return (
    <Box>
      <ul
      className="listSkills"
      >
        <li>
          <SiMongodb />
        </li>
        <li>
          <SiExpress />
        </li>
        <li>
          <FaReact />
        </li>
        <li >
          <IoLogoNodejs />
        </li>
      </ul>

      {/* <motion.ul
        className="listSkills"
        variants={parent}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item}>
          <SiMongodb />
        </motion.li>
        <motion.li variants={item}>
          <SiExpress />
        </motion.li>
        <motion.li variants={item}>
          <FaReact />
        </motion.li>
        <motion.li variants={item}>
          <IoLogoNodejs />
        </motion.li>
      </motion.ul> */}
    </Box>
  );
};

export default Bcard;
