import React from 'react';
import { Typography, Stack, Box, InputBase, Button } from '@mui/material';
const ContactUs = () => {
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <Box sx={{
                    padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                    color: 'black',
                }}>

                    <Typography variant="h5" sx={{
                        padding: '0px 0px 20px 0px'
                    }} >
                        Contact Us
                    </Typography>

                    <Typography variant="body1">We'd love to hear from you (almost as much as we'd love for you to buy some books) so please send us a message and we'll get back to you as soon as we can!</Typography><br />

                </Box>
                <Stack spacing={2}
                    sx={{
                        padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                        alignItems: 'end'
                    }}
                >
                    <InputBase placeholder="Name" sx={{
                        width: '100%',
                        height: '45px',
                        backgroundColor: '#e6e6e6',
                        borderRadius: '1px',
                        padding: '10px 15px',
                    }}>

                    </InputBase>

                    <InputBase placeholder="Email" sx={{
                        width: '100%',
                        height: '45px',
                        backgroundColor: '#e6e6e6',
                        borderRadius: '1px',
                        padding: '10px 15px',
                    }}>

                    </InputBase>

                    <InputBase placeholder="Phone Number" sx={{
                        width: '100%',
                        height: '45px',
                        backgroundColor: '#e6e6e6',
                        borderRadius: '1px',
                        padding: '10px 15px',
                    }}>

                    </InputBase>

                    <textarea rows={16} style={{ width: '100%', padding: '10px 15px', fontSize: '17px', borderRadius: '1px', backgroundColor: '#e6e6e6', border: 'none' }} placeholder='Message'></textarea>

                    <Button variant='contained'
                        sx={{
                            width: '83px',
                            height: '40px',
                            padding: '6px 20px',
                            fontSize: '18px',
                            borderRadius: '2px',
                            backgroundColor: '#931817',
                            '&:hover': { backgroundColor: '#7D1414' }
                        }}>
                        SEND
                    </Button>

                </Stack>
            </Stack>
        </>
    );
}

export default ContactUs;
