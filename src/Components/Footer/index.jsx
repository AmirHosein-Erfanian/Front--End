import React from 'react';
import { Stack, Grid, List, ListItem, Typography, TextField, Button, IconButton , Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import oneicon from './assets/1.svg'
import twoicon from './assets/2.svg'
import threeicon from './assets/3.svg'
import fouricon from './assets/4.svg'
import fiveicon from './assets/5.svg'
import sixicon from './assets/6.svg'
import sevenicon from './assets/7.svg'
import eighticon from './assets/8.svg'
import nineicon from './assets/9.svg'
const Footer = () => {
    return (
        <>
            <Stack component={'div'}
                sx={{
                    width: '100%',
                    height: { lg: '400px', md: '400px', sm: 'auto', xs: 'auto' },
                    backgroundColor: '#FFFFF',
                    padding: { lg: '42px 160px 10px  160px', md: '42px 2% 10px 2%' },
                    display: 'flex',
                }}>
                <Grid container
                    sx={{
                        textAlign: 'center',
                        color: '#9d9d9d',
                    }}
                >
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <List >
                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        fontSize: '16px',
                                        textAlign: 'center',
                                    }} >
                                    Find Us
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    15A Wicklow Street,
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    Dublin 2,
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    Dublin
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    secretbook@live.com
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    Explore
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/about-us'} style={{ color: '#9d9d9d' }}> About Us </Link>
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/contact-us'} style={{ color: '#9d9d9d' }}>Contact Us</Link>
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/terms-of-service'} style={{ color: '#9d9d9d' }}>Terms of service</Link>
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}>Refund policy</Link>
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    Information
                                </Typography>
                            </ListItem>

                            <ListItem>

                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}> Refund Policy</Link>
                                </Typography>
                            </ListItem>

                            <ListItem>

                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/privacy-policy'} style={{ color: '#9d9d9d' }}>Privacy Policy</Link>
                                </Typography>

                            </ListItem>

                            <ListItem>

                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/terms-of-service'} style={{ color: '#9d9d9d' }}> Terms of service</Link>
                                </Typography>

                            </ListItem>

                            <ListItem>

                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign:{lg:'auto',md:'auto',sm:'left',xs:'center'},
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/shipping-policy'} style={{ color: '#9d9d9d' }}> Shipping Policy</Link>
                                </Typography>

                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px'
                                    }} >
                                    Newsletter
                                </Typography>
                            </ListItem>

                            <ListItem>

                                <Typography
                                    sx={{
                                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                                        textAlign: { lg: 'auto', md: 'auto', sm: 'left', xs: 'center' },
                                        fontSize: '16px',
                                        '&:hover': { color: '#6A6A6A' }
                                    }} >
                                    <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}> Stay informed about the oddities we think are important.</Link>
                                </Typography>

                            </ListItem>

                            <ListItem>
                                <TextField label="Email Address" color='error' sx={{width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' }}} />
                                <Link to={'/'}>
                                    <Button variant="contained" sx={{
                                        color: 'black',
                                        boxShadow: 'none',
                                        padding: '17px 6px',
                                        fontSize: '12px',
                                        borderRadius: '2px',
                                        backgroundColor: '#931817',
                                        '&:hover': { backgroundColor: '#7D1414', boxShadow: 'none' }
                                    }} >
                                        SIGN UP
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>

                    </Grid>

                </Grid>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '15px 0 ' }} />
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: 'center' }}>

                        <IconButton aria-label="twitter" size='small'>
                            <Link to={'https://twitter.com/secretbookdub?lang=en#:~:text=The%20Secret%20Book%20And%20Record%20Store%20(%40secretbookdub)%20%7C%20Twitter'}><TwitterIcon color='primary' /></Link>
                        </IconButton>

                        <IconButton aria-label="facebook" size='small'>
                            <Link to={'https://www.facebook.com/The-Secret-Book-and-Record-Store-124706510933587'}><FacebookIcon color='primary' /></Link>
                        </IconButton>

                        <IconButton aria-label="instagram" size='small'>
                            <Link to={'https://www.instagram.com/thesecretbookstoredub'}><InstagramIcon color='primary' /></Link>
                        </IconButton>

                    </Grid>
                </Grid>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '15px 0 ' }} />
                <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12} sx={{textAlign:{lg:"auto",md:'auto',sm:'auto',xs:'center'}}}>
                        <Typography variant='span' sx={{ color: '#9d9d9d', fontSize: '12px' }}>© 2024 <Link to={'/'}>The Secret Bookstore</Link> </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} sx={{ direction: {lg:'rtl',md:'rtl',sm:'rtl',xs:'auto'} }}>
                      <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                      }}>
                        <img src={oneicon} /> <img src={twoicon} /> <img src={threeicon} /> <img src={fouricon} /> <img src={fiveicon} /> <img src={sixicon} /> <img src={sevenicon} /> <img src={eighticon} /> <img src={nineicon} />
                        </Box>  
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default Footer;
