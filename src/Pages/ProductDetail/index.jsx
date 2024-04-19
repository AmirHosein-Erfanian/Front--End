import React, { useEffect, useState } from 'react';
import { Stack, Grid, Typography, Box, FormControl, Select, MenuItem, InputLabel, ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItems, removeItems } from "../../Store/Slices/CartSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ProductDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const quantity = useSelector(state => state.cart.list)?.filter(e => e.id == id)[0]?.quantity
    const [product, setproduct] = useState();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:1337/api/products/${id}?populate=*`)
                const data = await res.json()
                setproduct(data.data);
            } catch (err) { alert(err) }
        })()
    }, [id])
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                <Grid container
                    sx={{
                        margin: '20px 0',
                        width: '100%',
                        height: 'auto',
                        columnGap: '70px',
                        flexWrap: { lg: 'nowrap !important' }
                    }}>

                    <Grid item lg={5} md={5} sm={12} xs={12}
                        sx={{

                        }}>
                        <Box sx={{ width: '100%', height: '550px' }}><img src={import.meta.env.VITE_BASE_URL + product?.attributes?.image?.data?.attributes?.url} style={{ width: '100%', height: '100%' }}></img></Box>
                    </Grid>

                    <Grid item lg={7} md={7} sm={12} xs={12}
                        sx={{
                            width: '100%',

                        }}>
                        <Stack sx={{ maxWidth: '95%', gap: '20px' }}>
                            <Typography sx={{ color: 'black' }} variant="h5" >{product?.attributes?.Name}</Typography>
                            <Typography sx={{ color: 'black' }} variant="h5" >€{product?.attributes?.price},00</Typography>
                            <Typography sx={{ color: 'black' }} variant="body1" >Tax included. <Link style={{ color: '#931817' }} to={'/shipping-policy'}>Shipping</Link>  calculated at checkout.</Typography>
                            <Typography sx={{ margin: '20px 0 0 0', color: 'black' }} variant="body1" >quantity</Typography>
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
                                <Button sx={{ background: 'transparent', height: '100%', minWidth: '5px !important', width: '20px', padding: '20px 5px !important', color: 'black', border: '1px solid #dedede !important', "&:hover": { background: '#dedede' } }} onClick={() => dispatch(removeItems(id))}>-</Button>
                                {quantity && <Typography>{quantity}</Typography>}
                                <Button sx={{ background: 'transparent', height: '100%', minWidth: '5px !important', width: '20px', padding: '20px 5px !important', color: 'black', border: '1px solid #dedede', "&:hover": { background: '#dedede' } }} onClick={() => dispatch(addItems(product))}>+</Button>
                            </ButtonGroup>
                            <Link to={quantity&&'/cart'}><Button variant="contained" startIcon={<ShoppingCartIcon sx={{
                                color: '#931817',
                            }} />}
                                sx={{
                                    width: '235px',
                                    borderRadius: '0px !important',
                                    height: '45px',
                                    boxShadow: 'none',
                                    fontSize: '18px',
                                    backgroundColor: 'transparent',
                                    border:'2px solid #931817',
                                    color: '#931817',
                                    "&:hover": { backgroundColor: 'transparent' , boxShadow: 'none' }
                                }} >
                                ADD TO CART 
                            </Button></Link>
                            <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                            <Typography sx={{ color: 'black' }} variant="body1" >{product?.attributes?.covertype}</Typography>
                            <Typography sx={{ color: 'black' }} variant="body1" >Condition: {product?.attributes?.condition}</Typography>
                            <Typography sx={{ color: 'black' }} variant="body1" >{product?.attributes?.description}</Typography>
                        </Stack>
                    </Grid>

                </Grid>

            </Stack>
        </>
    );
}

export default ProductDetail;




