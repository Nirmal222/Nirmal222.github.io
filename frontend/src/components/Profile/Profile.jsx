import { Box } from '@chakra-ui/react';
import React from 'react';
import stylesDark from './ProfileDark.module.css' 

const Profile = () => {
    return (
        <>
          <Box className={stylesDark.profile}>
            <img border='10px solid white' src="https://bit.ly/3eEpenA" alt="" />
            <h1>kjfkjnsk</h1>
          <span className={stylesDark.bar}><span className={stylesDark.skill}></span></span>
          </Box>
        </>
    );
}

export default Profile;
