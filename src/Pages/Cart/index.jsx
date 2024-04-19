import React from 'react';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { removeItems, addItems } from "../../Store/Slices/CartSlice";
import { Button, Typography, ButtonGroup, Grid , Box , Table , TableBody ,TableCell,TableRow  } from "@mui/material";
import { Link } from 'react-router-dom';
import paygoogle from './assets/paygoogle.jpg';
import shoppay from './assets/shoppay.jpg';
import paypal from './assets/paypal.jpg';
const Cart = () => {
    const { list } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    let totalPrice = 0;
    const items = list.map((e, index) => {
        totalPrice += e.quantity * (e.attributes.price)
        console.log(e);
        return (
            <>

                <TableRow
                    key={index}
                   
                >
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <TableCell sx={{border:'none !important'}} align="center" >
                                <img style={{ width: '120px', height: '150px' }} src={import.meta.env.VITE_BASE_URL + e?.attributes?.image?.data?.attributes?.url} alt="" />
                            </TableCell>
                            <TableCell sx={{border:'none !important'}} align="center">
                                {e?.attributes?.Name}
                            </TableCell>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: { lg: 'flex-end', md: 'flex-end', sm: 'flex-start', xs: 'flex-start' },
                                alignItems: 'center'
                            }}
                        >
                            <TableCell sx={{border:'none !important'}}  align="center">
                                <ButtonGroup
                                    disableElevation
                                    variant="contained"
                                    aria-label="Disabled button group"
                                    sx={{
                                        width: '100px',
                                        height: '50px',
                                        border: '1px solid #dedede',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button sx={{ background: 'transparent', height: '100%', minWidth: '5px !important', width: '20px', padding: '20px 5px !important', color: 'black', border: '1px solid #dedede !important', "&:hover": { background: '#dedede' } }} onClick={() => dispatch(removeItems(e.id))}>-</Button>
                                    {e.quantity && <Typography>{e.quantity}</Typography>}
                                    <Button sx={{ background: 'transparent', height: '100%', minWidth: '5px !important', width: '20px', padding: '20px 5px !important', color: 'black', border: '1px solid #dedede', "&:hover": { background: '#dedede' } }} onClick={() => dispatch(addItems(e))}>+</Button>
                                </ButtonGroup>
                            </TableCell>
                            <TableCell sx={{border:'none !important'}} align="center">
                                ${e.quantity * (e.attributes.price)}
                            </TableCell>
                        </Grid>
                    </Grid>
                    <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                </TableRow>

            </>

        );
    });
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <Typography variant="h5" >Shopping Cart</Typography>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />


                <Table sx={{ width: "100%" }} aria-label="simple table">
                    <TableBody>
                        {items}
                        <Grid container spacing={2}>

                            <Grid item lg={6} md={6} sm={12} xs={12} >
                                <Typography sx={{marginBottom:'15px'}} variant="body1">Special instructions for seller</Typography>
                                <textarea rows={5} style={{ width: '100%', padding: '10px 15px', fontSize: '17px', borderRadius: '1px', backgroundColor: '#e6e6e6', border: 'none' }} placeholder=''></textarea>

                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12} 
                            sx={{
                                display: "flex",
                                flexDirection:'column',
                                alignItems:'center',
                                gap:'25px'
                            }}>
                                <Typography variant="body1" > Subtitol € {totalPrice},00</Typography>
                                <Typography variant="body1" >Tax included. <Link style={{color:'#931817'}} to={'/shipping-policy'}>Shipping</Link> calculated at checkout.</Typography>
                                <Box sx={{width:'80%',height:'60px'}}><Link to={'https://shop.app/shop-pay'}><img style={{width:'100%',height:'100%'}} src={shoppay}></img></Link></Box>
                                <Box sx={{width:'80%',height:'60px'}}><Link to={'https://www.paypal.com/'}><img style={{width:'100%',height:'100%'}} src={paypal}></img></Link></Box>
                                <Box sx={{width:'80%',height:'60px'}}><Link to={'https://pay.google.com/'}><img style={{width:'100%',height:'100%'}} src={paygoogle}></img></Link></Box>


                            </Grid>

                        </Grid>
                    </TableBody>
                </Table>



            </Stack>
        </>
    );
}

export default Cart;
