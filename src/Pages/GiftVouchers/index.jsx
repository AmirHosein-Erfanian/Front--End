import React from 'react';
import { Stack, Typography } from '@mui/material';
const GiftVouchers = () => {
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
                <Stack sx={{
                    padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                    color: 'black',
                    alignItems: 'center'
                }}>

                    <Typography variant="h5" sx={{ padding: '0px 0px 20px 0px' }}>
                       Gift Vouchers
                    </Typography>

                        <Typography variant="body1" > To receive a Gift Voucher, you must be one of our VIP users ! </Typography><br />

                </Stack>

            </Stack>
        </>
    );
}

export default GiftVouchers;
