import React, { useEffect, useState } from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import pho from './assets/pho.jpg'

const PhilosophyPolitics = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                let res = await fetch("http://localhost:1337/api/products?populate=*&filters[id][$eq]=25&filters[id][$eq]=22&filters[id][$eq]=75&filters[id][$eq]=27");
                const data = await res.json()
                setproducts(data.data);
            }
            catch (err) { alert(err) }

        })();
    }, []);
    const items = products?.map((e, index) => (
        <Grid key={index} item lg={3} md={3} sm={3} xs={6}>
            <Link to={`/product-detail/${e?.id}/${e?.attributes?.Name.split(" ").join("-")}`}>
                <Stack component={'div'}
                    sx={{
                        height: '100%',
                        alignItems: 'center',
                        gap: '22px'
                    }}>
                    <Box sx={{ width: { lg: '155px', md: '155px', sm: '128px', xs: '155px' }, height: { lg: '235px', md: '235px', sm: '190px', xs: '235px' } }}><img src={import.meta.env.VITE_BASE_URL + e?.attributes?.image?.data?.attributes?.url} alt="" style={{ width: '100%', height: "100%" }} /></Box>
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
                        flexWrap: 'wrap',
                        rowGap: { lg: '', md: '', sm: '30px', xs: '30px' }
                    }}>
                    <Typography variant='h4' sx={{ color: 'black', width: { lg: 'auto', md: 'auto', sm: '95%', xs: '70%' } }}>
                        Philosophy & Politics
                    </Typography>
                    <Box sx={{ display: 'flex' }} >
                        <Link to={'/products/Philosophy-&-Politics'} style={{ color: '#931817', textDecoration: "none" }}>
                            More Philosophy & Politics
                        </Link><ChevronRightIcon color='error' size='small' />
                    </Box>
                </Stack>
                <Grid container spacing={2}
                    sx={{
                        margin: '10px 0',
                        width: '100%',
                        height: '75%'
                    }}>
                    {items}
                </Grid>
            </Stack>
        </>
    );
}

export default PhilosophyPolitics;
