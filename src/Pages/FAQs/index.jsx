import React from 'react';
import { Stack, Typography, Box } from '@mui/material'
const FAQs = () => {
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

                }}>

                    <Typography variant="h5" sx={{
                        padding: '0px 0px 20px 0px'
                    }} >
                        FAQs
                    </Typography>

                    <Typography variant='p' sx={{ color: 'black' }}>Q: How much is delivery?</Typography><br />

                    <Typography variant="p">A: We post to Ireland, only Ireland, the whole island of Ireland. Postage costs €3.95. We also offer free postage on orders over €20.</Typography><br />

                    <Typography variant="p" >Q: I can't find the book I'm looking for?</Typography><br />

                    <Typography variant="p" >A: Unfortunately we can't stock every single book in the world... We're more of a "have a browse and find a book your didn't know you wanted" kind of bookshop!</Typography><br />

                    <Typography variant="p" >Q: How long after I place my order will it be posted?</Typography><br />

                    <Typography variant="p" >A: We bring the post to the post office every weekday. If you've ordered before 16:00, generally we'll post it that day, otherwise it'll be posted the following day.</Typography><br />



                </Stack>

            </Stack>
        </>
    );
}

export default FAQs;
