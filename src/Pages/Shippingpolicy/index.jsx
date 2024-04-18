import React from 'react';
import { Stack, Typography } from '@mui/material';
const Shippingpolicy = () => {
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
                        Shipping policy
                    </Typography>

                    <Stack
                        sx={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <Typography variant="body1" > We offer shipping anywhere in Ireland for €3.95 and free shipping over €20. We currently only ship within Ireland, but the whole island of Ireland.</Typography><br />
                        <Typography variant="body1" > We use An Post Tracked postage and we aim to process orders within 2 working days.</Typography><br />
                        <Typography variant="body1" > If you haven't received your order within 15 days please contact us.</Typography><br />

                    </Stack>

                </Stack>

            </Stack>
        </>
    );
}

export default Shippingpolicy;
