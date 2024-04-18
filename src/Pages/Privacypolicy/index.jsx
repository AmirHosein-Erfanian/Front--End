import React from 'react';
import { Stack, Typography } from '@mui/material';
const Privacypolicy = () => {
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                backgroundColor: "#F3F3F3",
                padding: { lg: '30px 12%', md: "30px 12%", sm: '30px 5%', xs: '30px 2%' }
            }}>
                <hr color='gray' style={{ clear: 'both', height: '0', borderTop: 'solid #dedede', borderWidth: '1px 0 0', margin: '30px 0 ' }} />
                <Stack sx={{
                    padding: { lg: '20px 17%', md: '20px', sm: '20px', xs: '20px' },
                    color: 'black',
                    alignItems: 'center'
                }}>

                    <Typography variant="h4" sx={{ padding: '0px 0px 20px 0px' }}>
                    Privacy policy
                    </Typography>
                    ّ
                    <Stack
                        sx={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <Typography variant="body1" >This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from thesecretbookandrecordstore.ie (the “Site”).</Typography><br />
                        <Typography variant="body1" > Personal information we collect</Typography><br />
                        <Typography variant="body1" > When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</Typography><br />
                        <Typography variant="body1" >We collect Device Information using the following technologies:- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.- “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.- Google Analytics </Typography><br />
                        <Typography variant="body1" > Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers and Paypal details), email address, and phone number. We refer to this information as “Order Information”.</Typography><br />
                        <Typography variant="body1" > When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</Typography><br />
                        <Typography variant="body1" >How do we use your personal information?<br/>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:- Communicate with you;- Screen our orders for potential risk or fraud; and- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. </Typography><br />
                        <Typography variant="body1" > We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</Typography><br />
                        <Typography variant="body1" > Sharing you personal Information<br/>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</Typography><br />
                        <Typography variant="body1" > Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</Typography><br />
                        <Typography variant="body1" >Behavioural advertising<br/>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work. </Typography><br />
                        <Typography variant="body1" > You can opt out of targeted advertising by using the links below:- Facebook: https://www.facebook.com/settings/?tab=ads- Google: https://www.google.com/settings/ads/anonymous- Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</Typography><br />
                        <Typography variant="body1" > Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.</Typography><br />
                        <Typography variant="body1" >Do not track<br/>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser. </Typography><br />
                        <Typography variant="body1" >Your rights<br/>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. </Typography><br />
                        <Typography variant="body1" > Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</Typography><br />
                        <Typography variant="body1" > Data retention<br/>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</Typography><br />
                        <Typography variant="body1" > Changes<br/>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</Typography><br />
                        <Typography variant="body1" >Contact us<br/>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at secretbook@live.com or by mail using the details provided below: </Typography><br />   
                        <Typography variant="body1" >The Secret Book and Record Store, 15a Wicklow Street, Dublin 2, Dublin, Dublin, Ireland </Typography><br />   





                    </Stack>

                </Stack>

            </Stack>
        </>
    );
}

export default Privacypolicy;
