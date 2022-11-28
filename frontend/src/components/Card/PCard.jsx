import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BiShow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const PCard = ({url,title,descp,wurl,gurl,techStack}) => {
    console.log(techStack);
    return (
        <Box  w={['15rem','12rem','15rem','20rem']} p={'1rem'} margin={'auto'} className='with-linear-gradient' bg={'whitesmoke'} h={'fit-content'} borderRadius={'2%'} >
            <Image boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius={'2%'} src={url} w={'100%'}/>
            <Text fontWeight={700} fontSize={'1.5rem'} textAlign={'left'} color={'black'}>{title}</Text>
            <Text>
                <Text fontSize={'1rem'} fontWeight={600} color={'blacksmoke'} >TechStack:
                { techStack.map((e,i)=>{
                    if(i===techStack.length-1) return <span> {e} . </span>
                    return <span> {e}, </span>
                }) }
                </Text>
            </Text>
            <Text fontSize={[".7rem",".7rem",'1rem']} color={'blacksmoke'} w={'100%'} textAlign={'left'}>{descp}</Text>
            <Flex pt={3}>

            <Button w={['1rem','2rem']} display={'flex'}  m={'auto'}> <a href={wurl}><BiShow className='button_show'/></a> </Button>
            <Button w={['1rem','2rem']} display={'flex'} m={'auto'}> <a href={gurl}><BsGithub className='button_git'/></a> </Button>
            </Flex>
        </Box>
    );
}

export default PCard;
