import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                backgroundColor: "#F3F3F3",
                justifyContent: 'center',
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <Stack sx={{
                    padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Typography variant="h5" sx={{ padding: '0px 0px 20px 0px' }}>
                        404 Page Not Found
                    </Typography>

                    <Typography variant="body1" >The page you requested does not exist. Click <Link to={'/'} style={{ color: '#931817' }} > here </Link>to continue shopping.</Typography><br />

                </Stack>

            </Stack>
        </>
    );
}

export default NotFound;
