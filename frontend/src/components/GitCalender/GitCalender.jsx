import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GitCalender = () => {
  return (
    <Box color={'white'}  fontSize={['xl','xl','4xl']} fontWeight={'700'} w={'fit-content'} margin={'auto'}>
        <Text color={'white'} textAlign={'center'} >Git Calender</Text>
        <GitHubCalendar username="nirmal222" />
    </Box>
  )
}

export default GitCalender