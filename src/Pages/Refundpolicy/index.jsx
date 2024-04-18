import React from 'react';
import { Stack, Typography } from '@mui/material';
const Refundpolicy = () => {
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

                    <Typography variant="h5" sx={{ padding: '0px 0px 20px 0px' }}>
                        Refund policy
                    </Typography>
                    ّ
                    <Stack
                        sx={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <Typography variant="body1" > Returns</Typography><br />
                        <Typography variant="body1" > Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</Typography><br />
                        <Typography variant="body1" > To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging and we require a receipt or proof of purchase.</Typography><br />
                        <Typography variant="body1" > Refunds (if applicable)<br />Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain 5 days.</Typography><br />
                        <Typography variant="body1" > Late or missing refunds (if applicable)<br />If you haven’t received a refund yet, first check your bank account again.Then contact your credit card company, it may take some time before your refund is officially posted.Next contact your bank. There is often some processing time before a refund is posted.If you’ve done all of this and you still have not received your refund yet, please contact us at secretbook@live.com.</Typography><br />
                        <Typography variant="body1" > Exchanges (if applicable)<br />We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at secretbook@live.com and we will let you know the next steps</Typography><br />
                        <Typography variant="body1" > Shipping<br />To return your product, you should mail your product to: The Secret Book and Record Store, 15a Wicklow Street, Dublin 2, Dublin, Dublin, Ireland</Typography><br />
                        <Typography variant="body1" > You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</Typography><br />







                    </Stack>

                </Stack>

            </Stack>
        </>
    );
}

export default Refundpolicy;
