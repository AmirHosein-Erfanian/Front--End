import React from 'react';
import { Stack, Grid, List, ListItem, Typography, TextField, Button, IconButton } from '@mui/material';
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
                    height: '400px',
                    backgroundColor: '#FFFFF',
                    padding: '42px 160px 10px  160px',
                    display: 'flex',
                }}>
                <Grid container
                    sx={{
                        textAlign: 'center',
                        color: '#9d9d9d',
                    }}
                >
                    <Grid item lg={3} >
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Find Us
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    15A Wicklow Street,
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Dublin 2,
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Dublin
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    secretbook@live.com
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Explore
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Link to={'/about-us'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        About Us
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/contact-us'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Contact Us
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/terms-of-service'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Terms of service
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Refund policy
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Information
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Refund Policy
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/privacy-policy'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Privacy Policy
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/terms-of-service'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Terms of service
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link to={'/shipping-policy'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Shipping Policy
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3}>
                        <List>
                            <ListItem>
                                <Typography
                                    sx={{
                                        fontSize: '16px'
                                    }} >
                                    Newsletter
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Link to={'/refund-policy'} style={{ color: '#9d9d9d' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            '&:hover': { color: '#6A6A6A' }
                                        }} >
                                        Stay informed about the oddities we think are important.
                                    </Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <TextField label="Email Address" color='error' />
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
                    <Grid item lg={12} sx={{ textAlign: 'center' }}>

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
                    <Grid item lg={6}>
                        <Typography  variant='span' sx={{color:'#9d9d9d',fontSize:'12px'}}>© 2024 <Link to={'/'}>The Secret Bookstore</Link> </Typography>
                    </Grid>
                    <Grid item lg={6} sx={{direction:'rtl'}}>
                              <img src={oneicon}/> <img src={twoicon}/> <img src={threeicon}/> <img src={fouricon}/> <img src={fiveicon}/> <img src={sixicon}/> <img src={sevenicon}/> <img src={eighticon}/> <img src={nineicon}/>   
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default Footer;
