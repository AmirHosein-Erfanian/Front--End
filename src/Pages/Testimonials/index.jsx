import React from 'react';
import { Stack, Typography } from '@mui/material'
const Testimonials = () => {
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

                    <Typography variant="h5" sx={{ padding: '0px 0px 20px 0px' }}>
                        What our customers have said:
                    </Typography>

                    <Stack
                        sx={{
                            width: '100%',
                            height: 'auto',
                            alignItems: 'center',
                        }}
                    >

                        <Stack
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <Typography variant="body1" > "Fabulous service for online ordering. Ordered on Wednesday at 2pm and was delivered by An Post 22 hours later. 👏👏👏 Can't ask for better than that! Thank you. ❤️" </Typography> <br />
                            <Typography variant="body1"> Ann </Typography>
                        </Stack>

                        <hr style={{ width: '40%', clear: 'both', height: '0', borderTop: 'solid #931817', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                        <Stack
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <Typography variant="body1" > "Very impressed with my first order , speed of delivery and personal note 👏👌" </Typography> <br />
                            <Typography variant="body1"> Marie </Typography>
                        </Stack>

                        <hr style={{ width: '40%', clear: 'both', height: '0', borderTop: 'solid #931817', borderWidth: '1px 0 0', margin: '30px 0 ' }} />


                        <Stack
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <Typography variant="body1" >"What a labyrinth of treasures!" </Typography> <br />
                            <Typography variant="body1"> Tanya </Typography>
                        </Stack>

                        <hr style={{ width: '40%', clear: 'both', height: '0', borderTop: 'solid #931817', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                        <Stack
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <Typography variant="body1" >"I got my first order today. Amazing service including a hand written note. A real old fashioned personal service. A breath of fresh air in 2021. Well done to all of you 💚💚💚💚" </Typography> <br />
                            <Typography variant="body1"> Jackie </Typography>
                        </Stack>

                        <hr style={{ width: '40%', clear: 'both', height: '0', borderTop: 'solid #931817', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                        <Stack
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <Typography variant="body1" >"I ordered a book on Thursday, and it arrived yesterday, with some bookmarks and a lovely hand written note, forget Amazon I will definitely buy from these guys again." </Typography> <br />
                            <Typography variant="body1"> Teresa </Typography>
                        </Stack>




                    </Stack>





                </Stack>

            </Stack>
        </>
    );
}

export default Testimonials;
