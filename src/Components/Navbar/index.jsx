import { Box, Button, InputBase, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import logo from './assets/logo.avif'
import './style.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
    return (
        <>
            <Stack
                sx={{
                    height: '290px',
                    width: '100%',
                    padding: '50px 125px',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
                className={'nav-one'}
            >
                <Stack>
                    <img src={logo}
                        alt="Logo"
                        className='logo'
                        style={{ width: '410px', height: '178px' }} />
                </Stack>
                <Stack
                    sx={{
                        width: '500px',
                        height: 'auto',
                        alignItems: 'end',
                        gap: '20px'
                    }}>
                    <Typography variant='p' component={'p'}
                        sx={{
                            color: 'black',
                            fontSize: '14px',
                            fontWeight: '0',
                        }} >
                        Free postage over €20 AND 10% off over €50
                    </Typography>
                    <Typography variant='p'
                        sx={{
                            color: 'black'
                        }}>
                        <Link to={'/'} style={{ textDecoration: 'none ', color: 'black', fontSize: '16px' }}>Sign in </Link>   or   <Link to={'/'} style={{ textDecoration: 'none ', color: 'black', fontSize: '16px' }}>Create an Account</Link>
                    </Typography>

                    <Stack
                        sx={{
                            flexDirection: 'row',
                            gap: '20px',

                        }}>
                        <InputBase placeholder="search all products..." sx={{
                            width: '325px',
                            height: '49px',
                            backgroundColor: '#F3F3F3',
                            "&:hover": { background: '#e6e6e6' },
                            borderRadius: '1px',
                            padding: '10px 15px',
                        }}></InputBase>
                        <Button variant="contained" startIcon={<ShoppingCartIcon sx={{
                            color:'#545454',
                        }} />}
                            sx={{
                                width: '130px',
                                borderRadius: '3px !important',
                                height:'49px',
                                boxShadow:'none',
                                fontSize:'18px',
                                backgroundColor:'#F3F3F3',
                                color:'#545454',
                                "&:hover":{backgroundColor:'#e6e6e6'}
                            }} >
                            CART
                        </Button>
                    </Stack>


                </Stack>

            </Stack>
            <Stack
                flexDirection={"row"}
                justifyContent={'space-between'}
                alignItems={"center"}
                component={'nav'}
                bgcolor={'#931817'}
                className='nav-two'
            >
                <List sx={{
                    padding: '0px 120px',
                    display: "flex",
                    height: '62px',
                    flexDirection: "row",
                    display: { md: "flex", xs: "none" },
                }}
                    className='list'
                >
                    <ListItem ><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></ListItem>
                    <ListItem><Link to={'/about-us'} style={{ textDecoration: 'none', color: 'white' }} >AboutUs</Link></ListItem>
                    <ListItem><Link to={'/categories'} style={{ textDecoration: 'none', color: 'white', whiteSpace: 'nowrap' }}>Browse By Category</Link></ListItem>
                    <ListItem><Link to={'/gift-vouchers'} style={{ textDecoration: 'none', color: 'white' }} >GiftVouchers</Link></ListItem>
                    <ListItem><Link to={'/contact-us'} style={{ textDecoration: 'none', color: 'white' }} >ContactUs</Link></ListItem>
                    <ListItem><Link to={'/faq-s'} style={{ textDecoration: 'none', color: 'white' }} >FAQs</Link></ListItem>
                    <ListItem><Link to={'/testimonials'} style={{ textDecoration: 'none', color: 'white' }} >Testimonials</Link></ListItem>
                </List>
            </Stack>

        </>
    );
}

export default Navbar;


