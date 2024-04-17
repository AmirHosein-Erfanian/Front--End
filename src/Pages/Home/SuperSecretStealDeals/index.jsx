import { Stack, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pho from './assets/pho.jpg'

const SuperSecretStealDeals = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                let res = await fetch("http://localhost:1337/api/products?populate=*&filters[id][$lte]=44&filters[id][$gte]=41");
                const data = await res.json()
                setproducts(data.data);
            }
            catch (err) { alert(err) }

        })();
    }, []);
    const items = products?.map((e,index) => (
        <Grid key={index} item lg={3}>
            <Link to={'/'}>
                <Stack component={'div'}
                    sx={{
                        height: '100%',
                        alignItems: 'center',
                        gap: '22px'
                    }}>
                    <img src={import.meta.env.VITE_BASE_URL+e?.attributes?.image?.data?.attributes?.url} alt="" style={{ width: '155px', height: '235px' }} />
                    <Stack component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '15px'

                        }}>
                        <Typography variant='body1' sx={{ textDecoration: 'none', color: 'black', fontSize: '17px' }}>{e?.attributes?.Name}</Typography>
                        <Typography sx={{ textDecoration: 'none', color: 'black', fontSize: '22px' }} >€{e?.attributes?.price},00</Typography>
                    </Stack>
                </Stack>
            </Link>
        </Grid>
    ))
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
                        {items}
                </Grid>
            </Stack>
        </> 
    );
}

export default SuperSecretStealDeals;