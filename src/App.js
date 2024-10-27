import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './context/UserContext';

import SignInForm from './component/Account/SignInForm';
import SignUpForm from './component/Account/SignUpForm';

import Header from './component/Layout/Header'
import Footer from './component/Layout/Footer'

import HomePage from './component/Content/HomePage'
import ShopPage from './component/Content/ShopPage';
import ProductDetail from './component/Content/ProductDetail';
import BlogPage from './component/Content/BlogPage';
import ContactPage from './component/Content/ContactPage';
import CartPage from './component/Content/CartPage';


function App() {
  const { user } = useContext(UserContext)
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <div className="container-fluid fade-in">
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/shop' element={<ShopPage />} />
              <Route path='/product/:productId' element={<ProductDetail />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/contact' element={<ContactPage />}/>
              <Route path='/cart' element={<CartPage />}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </>
  );
}

export default App;
