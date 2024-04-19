import { Box, Button, Stack, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import pic from './assets/pic.webp';
import './style.css'
import { Link } from 'react-router-dom';
const BookWeek = () => {
    const [product, setproduct] = useState();
    useEffect(()=>{
        (async () => {
            try{
            const res = await fetch(`http://localhost:1337/api/products?populate=*&filters[Name][$eqi]=A Little HISTORY of DUBLIN`);
            const data = await res.json();
            setproduct(data.data[0]);
            console.log(product);
        }catch(err){alert(err)}
            
        })();
    },[])
    return (
        <>
            <Grid container spacing={5}
                sx={{
                    width: "100%",
                    height:{lg:'700px',md:'auto',sm:'auto',xs:'auto'},
                    padding: '0 2%',
                    columnGap: '0px'
                }}>
                <Grid item lg={6} md={6} sm={6} xs={12} component={'div'}
                    sx={{
                        height: '100%',
                    }}
                >
                    <img src={import.meta.env.VITE_BASE_URL +product?.attributes?.image?.data?.attributes?.url} alt="" style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Stack sx={{
                        width: 'auto',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        gap: '20px'
                    }}>
                        <Typography variant='h5' className='book-week'
                            sx={{
                                maxWidth: '270px',
                            }}>
                            Secret Book of the Week
                        </Typography>
                        <Typography variant='body1' className='book-week'
                            sx={{
                                maxWidth: '280px',
                                fontSize: '20px',
                                lineHeight: '30px'
                            }} >
                            {product?.attributes?.description}
                        </Typography>
                        <Link to={`/product-detail/${product?.id}/${product?.attributes?.Name.split(" ").join("-")}`}>
                        <Button className='book-week' variant='contained' sx={{
                            padding: '6px 20px',
                            fontSize: '18px',
                            borderRadius: '2px',
                            backgroundColor: '#931817',
                            '&:hover': { backgroundColor: '#7D1414' }
                        }}>
                            HAVE A LOOK HERE
                        </Button></Link>
                    </Stack>

                </Grid>
            </Grid >
        </>
    );
}

export default BookWeek;
