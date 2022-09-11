import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBg = ()=>{
        if(window.scrollY>=50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll",changeBg)
    return (
        <Flex
        className={navbar?"navbar scroll":"navbar"}
        >
            <Box>
                <Text id='logo'>Nirmal Kumar</Text>
            </Box>
            <Box id='navMenu'>
                <Text>Home</Text>
                <Text>About Me</Text>
                <Text>Skills</Text>
                <Text>Projects</Text>
                <Text>Contact</Text>
                <Text>Resume</Text>
            </Box>
        </Flex>
    );
}

export default Navbar;
