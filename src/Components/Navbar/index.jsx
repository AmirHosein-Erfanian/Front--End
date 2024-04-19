import React, { useEffect, useState } from 'react';
import './style.css'
import logo from './assets/logo.webp'
import {
    Box,
    Button,
    InputBase,
    List,
    ListItem,
    Stack,
    Typography,
    Grid,
    Drawer,
    IconButton,
    Badge
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../../Store/Slices/Auth";
export const Result = ({ img, name, id }) => {
    return (
        <>
            <Link style={{ color: '#931817' }} to={`/product-detail/${id}/${name.split(" ").join("-")}`}>
                <Stack
                    flexDirection={"row"}
                    p={"10px"}
                    sx={{ borderBottom: "1px solid gray", gap: '10px' }}
                >
                    <img src={img} alt={name} style={{ width: "60px", height: "60px" }} />
                    <Typography variant="body2">{name}</Typography>
                </Stack>
            </Link>
        </>
    );
};
const Navbar = () => {
    const dispatch = useDispatch();
    const lengthCart = useSelector(state => state.cart.list).length
    const { token } = useSelector((state) => state.auth);
    const [drawerOpen, setDrawerOpen] = useState(false);
    // const [open, setopen] = useState('');
    const [searchInp, setSearchInp] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    window.addEventListener("click", (e) => {
        if (!e.target.closest(".searchResult")) {
            setSearchInp("");
        }
    });
    useEffect(() => {
        if (searchInp) {
            (async () => {
                const res = await fetch(`http://localhost:1337/api/products?populate=*&filters[Name][$containsi]=${searchInp}`);
                const data = await res.json()
                setResult(data?.data);
                setLoading(false)
            })();
        }
    }, [searchInp]);
    const items = result?.map((e, index) => (
        <Result
            key={index}
            id={e?.id}
            name={e?.attributes.Name}
            img={import.meta.env.VITE_BASE_URL +e?.attributes.image?.data?.attributes?.url}
        />
    ));
    return (
        <>
            <Grid container
                sx={{
                    height: '265px',
                    padding: { lg: '50px 14%', md: '50px 5% 50px 14% ' },
                    flexDirection: 'row',
                    flexWrap: { sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
                    alignItems: 'center'
                }}
                className={'nav-one'}
            >
                <Grid item lg={4} xs={12} md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <img src={logo}
                        alt="Logo"
                        className='logo'
                        style={{ width: 'auto', height: '178px' }} />
                </Grid>
                <Grid item lg={8} md={8}
                    sx={{
                        display: { sm: "none", xs: 'none', md: "flex", lg: 'flex' },
                        flexDirection: 'column',
                        width: '500px',
                        height: 'auto',
                        alignItems: 'end',
                        rowGap: '15px'
                    }}>
                    <Typography variant='span' component={'span'}
                        sx={{
                            color: 'black',
                            fontSize: '12px',
                            fontWeight: '0',
                        }} >
                        Free postage over €20 AND 10% off over €50
                    </Typography>
                    <Typography variant='span'
                        sx={{
                            color: 'black'
                        }}>
                        {token ? <Typography component="a" sx={{ textDecoration: 'none ', color: 'black', fontSize: '16px', cursor: 'pointer' }} onClick={() => dispatch(logout())}> Logout </Typography> : <Link to={'/login-register'} style={{ textDecoration: 'none ', color: 'black', fontSize: '16px', }}>Sign in </Link>}  {token ? <></> : <>or</>}     {token ? <> </> : <Link to={'/login-register'} style={{ textDecoration: 'none ', color: 'black', fontSize: '16px' }}>Create an Account</Link>}
                    </Typography>

                    <Stack
                        sx={{
                            flexDirection: 'row',
                            gap: '20px',
                            width: '100%',
                            justifyContent: 'end'
                        }}>

                        <Box sx={{ position: "relative", width: '49%' }}>

                            <InputBase placeholder="search all products..."
                                value={searchInp}
                                onChange={(e) => {
                                    setSearchInp(e.target.value)
                                    setLoading(true)
                                }}
                                sx={{
                                    width: '100%',
                                    height: '45px',
                                    backgroundColor: '#F3F3F3',
                                    "&:hover": { background: '#e6e6e6' },
                                    borderRadius: '1px',
                                    padding: '10px 15px',
                                }}>

                            </InputBase>
                            <Stack
                                className="searchResult"
                                sx={{
                                    width: "100%",
                                    height: searchInp ? "350px" : "0px",
                                    position: "absolute",
                                    top: "100%",
                                    alignItems: 'center',
                                    left: 0,
                                    zIndex: 100000,
                                    backgroundColor: "#e6e6e6",
                                    borderRadius: "0 0 20px 20px",
                                    transition: "all 1s",
                                    overflowY: searchInp ? "auto" : "hidden",
                                }}
                            >
                                {loading ? <Typography>Searching ...</Typography> : result?.length > 0 ? <>{items}</> : <Typography>not found</Typography>}
                            </Stack>
                        </Box>




                        <Badge badgeContent={lengthCart} sx={{ display: 'flex', alignItems: 'center' }} color="primary">
                            <Link to={'/cart'}>
                                <Button variant="contained" startIcon={<ShoppingCartIcon sx={{
                                    color: '#545454',
                                }} />}
                                    sx={{
                                        borderRadius: '3px !important',
                                        height: '45px',
                                        boxShadow: 'none',
                                        fontSize: '18px',
                                        backgroundColor: '#F3F3F3',
                                        color: '#545454',
                                        "&:hover": { backgroundColor: '#e6e6e6' }
                                    }} >
                                    CART
                                </Button>
                            </Link>
                        </Badge>


                    </Stack>

                </Grid>
            </Grid>

            <Stack
                sx={{
                    className: 'nav-two',
                    position: drawerOpen ? 'fixed' : '',
                    top: '0',
                    component: 'nav',
                    zIndex: drawerOpen ? '2' : '',
                    width: '100%',
                    height: { lg: '57px', md: 'auto' },
                    justifyContent: { lg: 'left', md: 'space-between', sm: 'space-between', xs: 'space-between' },
                    alignItems: "center",
                    flexDirection: "row",
                    padding: { lg: '0px 10%', md: '0px  6%', sm: '0px 2%', xs: '0px 2%' },
                    bgcolor: '#931817',
                    boxShadow: 'none !important'
                }}
            >
                <IconButton sx={{ fontSize: '16px', color: 'white', gap: '5px', display: { xs: "flex", sm: 'flex', md: "none" }, }} onClick={() => setDrawerOpen(true)}>
                    <MenuIcon
                        sx={{
                            color: 'white',
                            fontSize: "28px",
                        }}
                    />Menu
                </IconButton>

                <List sx={{
                    display: "flex",
                    flexDirection: "row",
                    display: { md: "flex", xs: "none", sm: 'none' },
                    fontSize: "18px",
                }}
                    className='list'
                >
                    <ListItem ><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></ListItem>
                    <ListItem><Link to={'/about-us'} style={{ textDecoration: 'none', color: 'white' }} >AboutUs</Link></ListItem>
                    <ListItem sx={{ position: 'relative' }}><Link to={'/categories'} style={{ textDecoration: 'none', color: 'white', whiteSpace: 'nowrap' }}>Browse By Category</Link>
                        <Box sx={{
                            display: 'none ',
                            position: 'absolute',
                            top: '50px',
                            width: '260px !important',
                            height: open ? "400px" : "0px",
                            backgroundColor: '#F3F3F3',
                            zIndex: '10',

                        }}>
                            <List
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    "&  a": {
                                        color: "#931817 !important",
                                        fontSize: '18px'
                                    },
                                }}
                            >
                                <ListItem><Link to={'/products/NewArrivals'}>New Arrivals</Link></ListItem>
                                <ListItem><Link to={'/products/OurBestsellers'}>Our Bestsellers</Link></ListItem>
                                <ListItem><Link to={'/products/SuperSecretStealDeals'}>Super Secret Steal Deals</Link></ListItem>
                                <ListItem><Link to={'/products/IrishInterest'}>Irish Interest</Link></ListItem>
                                <ListItem><Link to={'/products/Philosophy&Politics'}>Philosophy & Politics</Link></ListItem>
                                <ListItem><Link to={'/products/ScienceFiction&Fantasy'}>Science Fiction & Fantasy</Link></ListItem>

                            </List>
                        </Box>
                    </ListItem>
                    <ListItem><Link to={'/gift-vouchers'} style={{ textDecoration: 'none', color: 'white' }} >GiftVouchers</Link></ListItem>
                    <ListItem><Link to={'/contact-us'} style={{ textDecoration: 'none', color: 'white' }} >ContactUs</Link></ListItem>
                    <ListItem><Link to={'/faq-s'} style={{ textDecoration: 'none', color: 'white' }} >FAQs</Link></ListItem>
                    <ListItem><Link to={'/testimonials'} style={{ textDecoration: 'none', color: 'white' }} >Testimonials</Link></ListItem>
                </List>

                <Badge badgeContent={lengthCart} sx={{ display: { xs: "flex", sm: 'flex', md: "none" , lg:'none' }, alignItems: 'center', color: 'primary' }} >
                    <Link to={'/cart'}>
                        <Button variant="contained" startIcon={<ShoppingCartIcon sx={{
                            color: 'white',
                        }} />}
                            sx={{
                                display: { xs: "flex", sm: 'flex', md: "none" },
                                width: '100px',
                                borderRadius: '3px !important',
                                height: '40px',
                                boxShadow: 'none',
                                fontSize: '15px',
                                backgroundColor: '#931817',
                                color: 'white',
                                "&:hover": { backgroundColor: '#931817', boxShadow: 'none' }
                            }} >
                            CART
                        </Button>
                    </Link>
                </Badge>

                <Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <List
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "&  a": {
                                color: "white !important",
                                fontSize: '18px'
                            },
                        }}
                    >
                        
                        <ListItem sx={{ height: '57px' }}>
                            <Box sx={{ position: "relative", width: '100%' }}>

                            <InputBase placeholder="search all products..."
                        value={searchInp}
                        onChange={(e) => {
                            setSearchInp(e.target.value)
                            setLoading(true)
                        }}
                            sx={{
                                width: '100%',
                                height: '45px',
                                backgroundColor: '#931817',
                                "&:hover": { background: '#931817' },
                                borderRadius: '1px',
                                border: '1px solid white',
                                padding: '10px 15px',
                            }}>

                        </InputBase>
                                <Stack
                                    className="searchResult"
                                    sx={{
                                        width: "100%",
                                        height: searchInp ? "350px" : "0px",
                                        position: "absolute",
                                        top: "100%",
                                        alignItems: 'center',
                                        left: 0,
                                        zIndex: 100000,
                                        backgroundColor: "#e6e6e6",
                                        borderRadius: "0 0 20px 20px",
                                        transition: "all 1s",
                                        overflowY: searchInp ? "auto" : "hidden",
                                    }}
                                >
                                    {loading ? <Typography>Searching ...</Typography> : result?.length > 0 ? <>{items}</> : <Typography>not found</Typography>}
                                </Stack>
                            </Box>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/"}>Home</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/about-us"}>About Us</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/categories"}>Browse by Category</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/gift-vouchers"}>Gift Vouchers</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/contact-us"}>Contact Us</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/faq-s"}>FAQs</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                        <ListItem sx={{ height: '57px' }}>
                            <Link to={"/testimonials"}>Testimonials</Link>
                        </ListItem>
                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />

                        {token ?
                            <Typography component="a" sx={{ textDecoration: 'none ', color: 'black', fontSize: '16px', cursor: 'pointer', height: '57px' }} onClick={() => dispatch(logout())}> Logout </Typography> : <Link to={'/login-register'} style={{ textDecoration: 'none ', color: 'black', fontSize: '16px', }}>Sign in or Create an Account </Link>}

                        <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #DF3331', borderWidth: '0.5px 0 0' }} />
                    </List>
                </Drawer>

            </Stack>







        </>
    );
}

export default Navbar;
















