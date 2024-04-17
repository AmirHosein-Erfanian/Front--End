import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%' , md:"30px 12%",sm:'30px 5%',xs:'30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <Box sx={{
                    padding: { lg: '20px 17%', md:'20px' , sm:'20px' , xs:'20px' },
                    color:'black'
                }}>

                    <Typography variant="h5" sx={{
                        padding: '0px 0px 20px 0px'
                    }} >
                        About Us
                    </Typography>

                    <Typography variant="body1" sx={{lineHeight:"30px"}}>

                       <Typography sx={{textAlign:'center'}}> About Us</Typography> <br/>
                       <Typography variant="body1"> When the Celtic Tiger was just a kitten we sold books: new and second hand.</Typography><br/>

                       <Typography variant="body1" >When the Millennium bug got busted; when the kindle tried to kill us; when the twin towers came down, we sold books: new and second hand.</Typography> <br/>

                      <Typography variant="body1" > When the Tiger died; the banks collapsed and all the world was in a state of chassis we went on - selling books: new and second hand</Typography><br/>

                      <Typography variant="body1" >  When America put a black man in the White House and made an Orange man its President, we sold books: new and second hand.</Typography><br/>

                       <Typography variant="body1" > You can say we lack imagination but when the Coronavirus closed us down we took the time to go online to sell our books, which you'll find, are both new and second hand.</Typography><br/>

                       <Typography variant="body1" > P.S. "Condition: As New" means the book is NOT second hand. It is in perfect condition.</Typography><br/>

                       <Typography variant="body1" sx={{textAlign:'center'}} > About Us Too (Get it?)</Typography> <br/>

                       <Typography variant="body1" > Our website is still relatively new. There are currently more than three thousand titles on offer and we're adding new ones every day... but no crap. You won't find anything that is an insult to your intelligence; no ghost written celeb exposés; no Billy Whizz knock 'em dead business bibles; nothing that exploits, and nothing that glorifies twisted serial killers etc.</Typography><br/>

                       <Typography variant="body1" > This is exactly how we filter the stock coming into our shop. Come and visit us there - Seven days a week, 11:00 till 18:30</Typography> <br/>

                       <Typography variant="body1" sx={{textAlign:'center'}}> About Us Three </Typography><br/>

                       <Typography variant="body1" > But wait, that's not all, we have just over 5,000 more books on the Amazon and ABE platforms. Furthermore, whereas this website serves only the island of Ireland, what we have on Amazon and ABE is available worldwide. If you'd like anything from ABE or Amazon alongside something from our website please feel free to contact us.</Typography> <br/>

                       <Typography variant="body1" > The links below will bring you right to the books we have there:</Typography><br/>
                       <Typography variant="body1" color='error' ><Link to={'https://www.abebooks.co.uk/servlet/SearchResults?sortby=0&vci=54251457'} style={{color:'#931817'}}>https://www.abebooks.co.uk/servlet/SearchResults?sortby=0&vci=54251457</Link></Typography><br/>

                       <Typography variant="body1" ><Link to={'https://www.amazon.co.uk/s?i=merchant-items&me=AV1M0L6W6O2BX&qid=1595229521&ref=sr_pg_1'} style={{color:'#931817'}}>https://www.amazon.co.uk/s?i=merchant-<br/>items&me=AV1M0L6W6O2BX&qid=1595229521&ref=sr_pg_1</Link></Typography>

                    </Typography>

                </Box>

            </Stack>
        </>
    );
}

export default AboutUs;
