import React, { useEffect, useState } from 'react';
import { Stack, Grid, Typography, Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
const Products = () => {
    const { categoryid } = useParams();
    const { categoryName } = useParams();
    const [products, setproducts] = useState([]);
    const [sort, setsort] = React.useState('createdAt:asc');
    const handleSort = (event) => {
        setsort(event.target.value);
    };
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:1337/api/products?populate=*${categoryName !== "all-categories" ? `&filters[categories][id][$eqi]=${categoryid}` : ""}&sort=${sort}`)
                const data = await res.json()
                setproducts(data.data);
            } catch (err) { alert(err) }
        })()
    }, [sort,categoryid])
    const item = products?.map((e, index) => (
        <Grid key={index} item lg={3} md={3} sm={3} xs={6} >
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
                        {categoryName.split(" ").join("-")}
                    </Typography>
                    <Box sx={{ display: 'flex' }} >
                        <FormControl sx={{ minWidth: 120 }} color='error' size="small">
                            <InputLabel id="demo-select-small-label">Sort By </InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={sort}
                                label="sort"
                                onChange={handleSort}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'createdAt:asc'}>Date , old to new </MenuItem>
                                <MenuItem value={'createdAt:desc'}>Date , new to old</MenuItem>
                                <MenuItem value={'price:asc'}>price , low to high</MenuItem>
                                <MenuItem value={'price:desc'}>price , high to low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>

                <Grid container spacing={2}
                    sx={{
                        margin: '10px 0',
                        width: '100%',
                        height: '75%'
                    }}>
                    {item}
                </Grid>

            </Stack>
        </>
    );
}

export default Products;






