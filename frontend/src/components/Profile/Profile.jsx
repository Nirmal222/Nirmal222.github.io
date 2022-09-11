import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import stylesDark from './ProfileDark.module.css'
const Profile = () => {
    return (
        <Box>
          <Box className={stylesDark.profile}>
            <Text fontSize={'6xl'} className={stylesDark.greet}>Bonjour!<span className={stylesDark.wave}>👋</span></Text>
            <Text fontSize={'7xl'}><span className='from'>Welcome Homecd <nav></nav></span>, <br /> Nice To Meet You!</Text>
          </Box>
        </Box>
    );
}

export default Profile;
