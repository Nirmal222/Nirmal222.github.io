import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import stylesDark from './ProfileDark.module.css'
const Profile = () => {
    return (
        <Box>
          <Box className={stylesDark.profile}>
            <Text fontSize={['3xl','4xl','6xl']} className={stylesDark.greet}>Bonjour!<span className={stylesDark.wave}>👋</span></Text>
            <Text fontSize={['3xl','4xl','7xl']}><span className='from'>Welcome Home</span>,<br />Nice To Meet You!</Text>
          </Box>

          <Box className={stylesDark.profile} position={'absolute'} right={'1%'} top={'35%'}>
            <Text fontSize={['lg']} className={stylesDark.web}><span>Tap to Explore</span></Text>
          </Box>
        </Box>
    );
}

export default Profile;
