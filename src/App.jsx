import './App.css';

import { Box, CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import LoginRegister from './Pages/LoginRegister';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound';
import { useSelector } from 'react-redux';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import FAQs from './Pages/FAQs';
import Privacypolicy from './Pages/Privacypolicy';
import Refundpolicy from './Pages/Refundpolicy';
import Shippingpolicy from './Pages/Shippingpolicy';
import Termsofservice from './Pages/Termsofservice';
import Testimonials from './Pages/Testimonials';
import GiftVouchers from './Pages/GiftVouchers';
function App() {
  const { token } = useSelector(state => state.auth)

  return (
    <>
      <Navbar />
      <CssBaseline/>
      <Box component={'section'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/cart" element={token ? <Cart /> : <Navigate to={'/login-register'} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id/:name" element={<ProductDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq-s" element={<FAQs />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/refund-policy" element={<Refundpolicy />} />
          <Route path="/shipping-policy" element={<Shippingpolicy />} />
          <Route path="/terms-of-service" element={<Termsofservice />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gift-vouchers" element={<GiftVouchers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}

export default App


