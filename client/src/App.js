import React, {useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Products from '../src/all_products_page/Products';
import ErrorPage from './ErrorPage';
import SingleProduct from './SingleProduct';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import AddressPage from './Address_Page/Address';
const App = () => {
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgba(29 ,29, 29, .8)',
      white: '#fff',
      black: ' #212529',
      helper: '#8490ff',
      bg: '#F6F8FA',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient:
        'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: {
      mobile: '768px',
      tab: '998px',
    },
  };

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategoryData(data.data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes> 
          <Route path="/" element={<Home categoryData={categoryData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<AddressPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
};

export default App;
