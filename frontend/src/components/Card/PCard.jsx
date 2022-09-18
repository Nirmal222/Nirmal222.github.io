import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BiShow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const PCard = ({url,title}) => {
    return (
        <Box  w={['15rem','15rem','20rem']} margin={'auto'} className='with-linear-gradient' bg={'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'} h={'fit-content'} borderRadius={'5%'} p={'.5%'}>
            <Image src={url}/>
            <Text fontWeight={'600'} fontSize={'2rem'} textAlign={'center'} color={'white'}>{title}</Text>
            <Flex>
            <Button w={['1rem','2rem']} display={'flex'}  m={'auto'}><BiShow className='button_show'/></Button>
            <Button w={['1rem','2rem']} display={'flex'} m={'auto'}><BsGithub className='button_git'/></Button>
            </Flex>
        </Box>
    );
}

export default PCard;
