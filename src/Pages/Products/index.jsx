import React, { useEffect, useState } from 'react';
import { Stack, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
const Products = () => {
    const { categoryName } = useParams();
    const [products, setproducts] = useState();
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:1337/api/products?populate=*&filters[categories.data[0].attributes.Name][$eqi]=NewArrivals`)
                const data = await res.json()
                setproducts(data)
                console.log(products);
            } catch (err) { alert(err) }
        })()
    }, [])
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                <Stack component={'section'}
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        rowGap: { lg: '', md: '', sm: '30px', xs: '30px' },
                    }}>
                    <Typography variant='h4' sx={{ color: 'black', width: { lg: 'auto', md: 'auto', sm: '95%', xs: '70%' } }}>
                        New Arrivals
                    </Typography>
                    <Box sx={{ display: 'flex' }} >
                        <Link to={'/products/New-Arrivals'} style={{ color: '#931817', textDecoration: "none" }}>
                            More New Arrivals
                        </Link>
                    </Box>
                </Stack>

                <Grid container spacing={2}
                    sx={{
                        margin: '10px 0',
                        width: '100%',
                        height: '75%'
                    }}>

                </Grid>

            </Stack>
        </>
    );
}

export default Products;
