import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import pic from './assets/pic.webp';
import  './style.css'
const BookWeek = () => {
    return (
        <>
            <Stack
                sx={{
                    width: "100%",
                    height: '700px',
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0 50px',
                    gap:'80px'
                }}>
                <Box component={'div'}
                    sx={{
                        width: '450px',
                        height: '100%',

                    }}
                >
                    <img src={pic} alt="" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Stack
                  
                    sx={{
                        width: 'auto',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign:'left',
                        gap:'20px'
                    }}>
                    <Typography variant='h5' className='book-week'
                        sx={{
                            maxWidth: '270px',
                        }}>
                        Secret Book of the Week
                    </Typography>
                    <Typography variant='body1'  className='book-week'
                        sx={{
                            maxWidth: '280px',
                            fontSize:'20px',
                            lineHeight:'30px'
                        }} >
                        There is a great city called Dublin
                        Who's past is both proud and puzzlin'
                        A museum founder writes
                        'cause he gives many shites
                        About its history so humblin'
                    </Typography>
                    <Button className='book-week' variant='contained' sx={{
                        padding:'6px 20px',
                        fontSize:'18px',
                        borderRadius:'2px',
                        backgroundColor:'#931817',
                        '&:hover':{backgroundColor:'#7D1414'}
                    }}>
                        HAVE A LOOK HERE
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default BookWeek;
