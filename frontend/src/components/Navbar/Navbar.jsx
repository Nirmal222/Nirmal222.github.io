import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDownload } from "react-icons/hi"
import resume from "../../utils/resume.pdf"
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
        transition={['none','none','none']}
        // 0.4s ease-in-out
        pl={'1rem'}
        pr={'1rem'}
        >
            <Box>
                <Text id='logo'><Link activeClass="active" to="home" spy={true} smooth={true}  duration={700} cursor={'pointer'}>Nirmal Kumar</Link></Text>
            </Box>
            <Box  display={["none", "none","flex"]} id='navMenu'>
                <Text><Link activeClass="active" to="home" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Home</Link></Text>
                <Text><Link activeClass="active" to="aboutme" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>About Me</Link></Text>
                <Text><Link activeClass="active" to="skills" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Skills</Link></Text>
                <Text><Link activeClass="active" to="projects" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Projects</Link></Text>
                <Text><Link activeClass="active" to="contact" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Contact</Link></Text>
                <Text display={'flex'} bg={'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'} color={'white'} borderRadius={'7px'} p={1} position={'relative'} bottom={1} alignItems={'center'}><a download href={resume}>Resume</a><HiDownload/></Text>
            </Box>

            <Box className='ham' display={['block','block','none']} fontSize={['2rem']}>
                <GiHamburgerMenu/>
            </Box>
        </Flex>
    );
}

export default Navbar;
