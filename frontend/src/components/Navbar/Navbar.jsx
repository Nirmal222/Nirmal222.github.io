import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDownload } from "react-icons/hi"
import resume from "../../utils/resume.pdf"
import { CloseIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
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
            <Box  display={["none", "none",'none',"flex"]} id='navMenu'>
                <Text><Link activeClass="active" to="home" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Home</Link></Text>
                <Text><Link activeClass="active" to="aboutme" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>About Me</Link></Text>
                <Text><Link activeClass="active" to="skills" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Skills</Link></Text>
                <Text><Link activeClass="active" to="projects" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Projects</Link></Text>
                <Text><Link activeClass="active" to="contact" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Contact</Link></Text>
                <Text display={'flex'} bg={'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'} color={'white'} borderRadius={'2%'} p={1} position={'relative'} bottom={1} alignItems={'center'}><a download="Nirmal-Kumar-Resume" href={resume}>Resume</a><HiDownload/></Text>
            </Box>

            
      
            <Box display={['block','block','block','none']}
            
            >
            <Button colorScheme='transparent' onClick={onOpen} fontSize="2rem">
                <GiHamburgerMenu className={navbar?"ham hscroll":"ham"}/>
            </Button>
            <Drawer size={'xs'} placement={placement} onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent  position={'relative'}>
            <DrawerHeader borderBottomWidth='1px' position={'absolute'} right={"0"} onClick={onClose} ><CloseIcon/></DrawerHeader>
                <DrawerBody fontWeight={700} fontSize='xl'>
                    <Text mt={8} ><Link onClick={onClose} activeClass="active" to="home" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Home</Link></Text>
                    <Text mt={8} ><Link onClick={onClose} activeClass="active" to="aboutme" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>About Me</Link></Text>
                    <Text mt={8} ><Link onClick={onClose} activeClass="active" to="skills" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Skills</Link></Text>
                    <Text mt={8} ><Link onClick={onClose} activeClass="active" to="projects" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Projects</Link></Text>
                    <Text mt={8} ><Link onClick={onClose} activeClass="active" to="contact" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}>Contact</Link></Text>
                    <Text mt={8}  display={'flex'} bg={'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'} color={'white'} borderRadius={'2%'} p={1} position={'relative'} bottom={1} alignItems={'center'}><a download="Nirmal-Kumar-Resume" href={resume} >Resume</a><HiDownload/></Text>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
            </Box>
        </Flex>
    );
}

export default Navbar;
