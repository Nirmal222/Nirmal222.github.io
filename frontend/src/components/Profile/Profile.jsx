import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card/Card';
import stylesDark from './ProfileDark.module.css'
const Profile = () => {
    return (
        <Box >
          <Box mt={'10%'} className={stylesDark.profile} ml={[0,'0','3.5rem','3.5rem']} textAlign={['center','center','left','left']}>
            <Text fontSize={['2xl','4xl','4xl','5xl']} display={['none','none','block']} className={stylesDark.greet}>Hello!<span className={stylesDark.wave}>👋</span></Text>
            <Text fontSize={['2xl','2xl','2.2xl','5xl']} w={'100%'} className={stylesDark.meetya}>Nice To Meet You!</Text>
          </Box>

        </Box>
    );
}

export default Profile;
