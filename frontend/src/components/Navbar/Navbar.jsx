import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
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
                <Text id='logo'><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>Nirmal Kumar</Link></Text>
            </Box>
            <Box id='navMenu'>
            <Text><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>Home</Link></Text>
                <Text><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>About Me</Link></Text>
                <Text><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>Skills</Link></Text>
                <Text><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>Projects</Link></Text>
                <Text><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={700} cursor={'pointer'}>Contact</Link></Text>
                <Text>Resume</Text>
            </Box>
        </Flex>
    );
}

export default Navbar;
