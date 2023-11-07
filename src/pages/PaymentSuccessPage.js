import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentSuccessPage = () => {
  return (
    <div>

        <Navbar />  

    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert variant="filled" severity="success">
      Success — Your payment has been made!
    </Alert>
  </Stack>

    
    <Footer/>

    </div>
  )
}

export default PaymentSuccessPage