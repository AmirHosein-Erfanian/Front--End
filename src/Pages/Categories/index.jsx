import React, { useEffect, useState } from 'react';
import { Stack, Typography, Grid , Box } from '@mui/material';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [products, setproducts] = useState();
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:1337/api/categories?populate=*')
                const data = await res.json()
                setproducts(data.data)
                console.log(products);
            } catch (err) { alert(err) }
        })()
    }, [])
    const items = products?.map((e, index) => (
        <Grid key={index} item lg={3} md={3} sm={3} xs={6}>
            <Link to={`/products/${e?.attributes?.Name.split(" ").join("-")}`}>
                <Stack component={'div'}
                    sx={{
                        border:'1px solid #dedede',
                        background:'#e6e6e6',
                        height: '290px',
                        padding:'30px 20px',
                        alignItems: 'center',
                        gap: '22px',
                        cursor:'pointer',
                        "&:hover":{opacity:'0.9'}
                    }}>
                    <Box sx={{width:'100%',height:'70%'}}><img src={import.meta.env.VITE_BASE_URL + e?.attributes?.Image?.data?.attributes?.url} alt="" style={{ width: '100%', height: "100%" }} /></Box>
                    <Stack component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        <Typography variant='body1' sx={{ color: 'black', fontSize: '17px' }}>{e?.attributes?.Name}</Typography>
                    </Stack>
                </Stack>
                </Link>
        </Grid>
    ))
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />

                <Grid container spacing={2}
                    sx={{
                        width:'100%',
                        height:'100%',
                        padding: { lg: '30px 0px' },
                    }} >
                        {items}
                </Grid>

            </Stack>
        </>
    );
}

export default Categories;


