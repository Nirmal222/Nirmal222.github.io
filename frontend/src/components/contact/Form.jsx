import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

const Form = () => {
    return (
        <form action="https://formsubmit.co/nirmalkumargurajada@gmail.com" method="POST" >
        <Grid margin={'auto'} w={['80vw','50vw','60vw']} fontWeight={600} fontSize={'md'}>
                <label color='white'>Full Name</label>
                <input paddingLeft={3} className='inputs' name='name' bg={'transparent'} type="text" placeholder='Your Name'/>
            <br />
                <label color='white'>Email</label>
                <input paddingLeft={3} className='inputs' type="email" name='email' placeholder='Your Email'/>
            <br />
                <label color='white'>Your Mobile No</label>
                <input paddingLeft={3} className='inputs' type="email" name='number' placeholder='Your Contact No'/>
            <br />
                <label color='white'>Enter your Message</label>
                <textarea paddingLeft={3} className='inputst' name="subject" placeholder="Write something.." height={'500px'}></textarea>
            <br />
                <Button type='submit' display={'inline'} color={'red'}>Submit</Button>
           </Grid>
        </form>
    );
}

export default Form;
// position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%,-50%)'}
