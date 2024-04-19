import './App.css';
import { Box, CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
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
import Categories from './Pages/Categories';
import LoginRegister from './Pages/LoginRegister';
// import Login from './Pages/LoginRegister/Login';
// import Register from './Pages/LoginRegister/Register';
function App() {
  const { token } = useSelector(state => state.auth)

  return (
    <>
    <CssBaseline/>
      <Navbar />
      <Box component={'section'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-register" element={!token?<LoginRegister/>:<Navigate to={'/'}/>} />
          {/* <Route path="/login" element={!token?<Login/>:<Navigate to={'/'}/>} />
          <Route path="/register" element={!token?<Register/>:<Navigate to={'/'}/>} /> */}
          <Route path="/cart" element={token ? <Cart /> : <Navigate to={'/login-register'} />} />
          <Route path="/products/:categoryid/:categoryName" element={<Products />} />
          <Route path="/product-detail/:id/:name" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories/>} />
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


