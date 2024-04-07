import { Box, Stack } from '@mui/material';
import './style.css'
import React from 'react';
import banner from './assets/banner-1.webp'
import BookWeek from './BookWeek';
import NewArrivalsCtgr from './NewArrivalsCtgr';
import OurBestsellers from './OurBestsellers';
import SuperSecretStealDeals from './SuperSecretStealDeals';
import IrishInterest from './IrishInterest';
import PhilosophyPolitics from './PhilosophyPolitics';
import ScienceFictionFantasy from './ScienceFictionFantasy';
import Addres from './Addres';
const Home = () => {
    return (
        <>
            <Stack component={'section'} className={'home'}
                sx={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#F3F3F3',
                    padding: '30px 160px',
                    display: 'flex',
                }}>
                <Box component={'div'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '15px 0',
                        width: '100%',
                        height: '220px'
                    }}
                >
                    <img src={banner} alt="Banner" style={{ width: '73%', height: '100%' }} />
                </Box>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <BookWeek />
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <NewArrivalsCtgr />
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <OurBestsellers/>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <SuperSecretStealDeals/>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <IrishInterest/>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <PhilosophyPolitics/>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <ScienceFictionFantasy/>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <Addres/>
            </Stack>
        </>
    );
}

export default Home;
