import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import addre from './assets/addre.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
const Addres = () => {
    return (
        <>
            <Grid container
                sx={{
                    width: '100%',
                    height:{lg:'345px',md:'345px',sm:'auto',xs:'auto'}
                }}
            >
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Stack component={'div'}
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#F8F8F8',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '33px 0',
                            rowGap:{lg:'',md:'',sm:'20px',xs:'20px'}
                        }}>
                        <Typography variant="h5" sx={{ color: 'black' }} >
                            The Secret Bookstore
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '19px' }}>
                            15A Wicklow Street,
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '19px' }}>
                            Dublin 2
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '19px' }}>
                            Mon - Sun, 11am - 6:30pm
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '19px' }}>
                            Thursdays Only 11am - 7:30pm
                        </Typography>
                        <Link to={'https://www.google.com/maps?daddr=15a+wicklow+street,+dublin'}>
                        <Button variant='contained' startIcon={<LocationOnIcon sx={{
                            color: '#F8F8F8',
                        }} />}
                         sx={{
                            padding: '6px 20px',
                            fontSize: '18px',
                            borderRadius: '2px',
                            backgroundColor: '#931817',
                            '&:hover': { backgroundColor: '#7D1414' }
                        }}>
                            DIRECTIONS
                        </Button>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ height: '100%' }}>
                    <img src={addre} alt="address"
                        style={{
                            width: '100%',
                            height: '100%'
                        }} />
                </Grid>

            </Grid>
        </>
    );
}

export default Addres;
