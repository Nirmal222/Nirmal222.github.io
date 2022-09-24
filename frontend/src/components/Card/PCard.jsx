import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BiShow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const PCard = ({url,title,descp,wurl,gurl}) => {
    return (
        <Box  w={['15rem','12rem','15rem','20rem']} p={'1rem'} margin={'auto'} className='with-linear-gradient' bg={'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'} h={'fit-content'} borderRadius={'7%'} >
            <Image borderRadius={'15px'} src={url} w={'100%'}/>
            <Text fontWeight={700} fontSize={'1.5rem'} textAlign={'center'} color={'white'}>{title}</Text>
            <Text fontSize={[".7rem",".7rem",'1rem']} color={'white'} w={'100%'} textAlign={'center'}>{descp}</Text>
            <Flex pt={3}>

            <Button w={['1rem','2rem']} display={'flex'}  m={'auto'}> <a href={wurl}><BiShow className='button_show'/></a> </Button>
            <Button w={['1rem','2rem']} display={'flex'} m={'auto'}> <a href={gurl}><BsGithub className='button_git'/></a> </Button>
            </Flex>
        </Box>
    );
}

export default PCard;
