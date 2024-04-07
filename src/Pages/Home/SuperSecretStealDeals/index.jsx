import { Stack, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import pho from './assets/pho.jpg'

const SuperSecretStealDeals = () => {
    return (
        <>
            <Stack component={'section'}  >
                <Stack component={'section'}
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: ''
                    }}>
                    <Typography variant='h4' sx={{ color: 'black' }}>
                        Super Secret Steal Deals
                    </Typography>
                    <Link to={'/'} style={{ color: '#931817', textDecoration: "none" }}>
                        More {'Super Secret Steal Deals'}
                    </Link>
                </Stack>
                <Grid container spacing={2}
                    sx={{
                        margin: '10px 0',
                        width: '100%',
                        height: '400px'
                    }}>

                    <Grid item lg={3}>
                        <Link to={'/'}>
                            <Stack component={'div'}
                                sx={{
                                    height: '100%',
                                    alignItems: 'center',
                                    gap: '22px'
                                }}>
                                <img src={pho} alt="" style={{ width: '155px', height: '235px' }} />
                                <Stack component={'div'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'

                                    }}>
                                    <Typography variant='body1' sx={{ textDecoration: 'none', color: 'black', fontSize: '17px' }}>Pilgrim Soul: W. B. Yeats and the Ireland of His Time; Daniel Mulhall</Typography>
                                    <Typography sx={{ textDecoration: 'none', color: 'black', fontSize: '22px' }} >€59.99</Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid item lg={3}>
                        <Link to={'/'}>
                            <Stack component={'div'}
                                sx={{
                                    height: '100%',
                                    alignItems: 'center',
                                    gap: '22px'
                                }}>
                                <img src={pho} alt="" style={{ width: '155px', height: '235px' }} />
                                <Stack component={'div'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'

                                    }}>
                                    <Typography variant='body1' sx={{ textDecoration: 'none', color: 'black', fontSize: '17px' }}>Pilgrim Soul: W. B. Yeats and the Ireland of His Time; Daniel Mulhall</Typography>
                                    <Typography sx={{ textDecoration: 'none', color: 'black', fontSize: '22px' }} >€59.99</Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid item lg={3}>
                        <Link to={'/'}>
                            <Stack component={'div'}
                                sx={{
                                    height: '100%',
                                    alignItems: 'center',
                                    gap: '22px'
                                }}>
                                <img src={pho} alt="" style={{ width: '155px', height: '235px' }} />
                                <Stack component={'div'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'

                                    }}>
                                    <Typography variant='body1' sx={{ textDecoration: 'none', color: 'black', fontSize: '17px' }}>Pilgrim Soul: W. B. Yeats and the Ireland of His Time; Daniel Mulhall</Typography>
                                    <Typography sx={{ textDecoration: 'none', color: 'black', fontSize: '22px' }} >€59.99</Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid item lg={3}>
                        <Link to={'/'}>
                            <Stack component={'div'}
                                sx={{
                                    height: '100%',
                                    alignItems: 'center',
                                    gap: '22px'
                                }}>
                                <img src={pho} alt="" style={{ width: '155px', height: '235px' }} />
                                <Stack component={'div'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'

                                    }}>
                                    <Typography variant='body1' sx={{ textDecoration: 'none', color: 'black', fontSize: '17px' }}>Pilgrim Soul: W. B. Yeats and the Ireland of His Time; Daniel Mulhall</Typography>
                                    <Typography sx={{ textDecoration: 'none', color: 'black', fontSize: '22px' }} >€59.99</Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>

                </Grid>
            </Stack>
        </>
    );
}

export default SuperSecretStealDeals;
