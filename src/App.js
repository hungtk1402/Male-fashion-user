import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LoadingContext } from './context/LoadingContext';

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
import CheckOut from './component/Content/CheckOut';

function App() {
  const location = useLocation()
  const { loading, setLoading } = useContext(LoadingContext)

  // Xác định trang đăng nhập hoặc đăng ký
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup'

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location, setLoading])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid fade-in">
        {!isAuthPage && <Header />}
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/signin' element={<SignInForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {!isAuthPage && <Footer />}
      </div>
    </>
  );
}

export default App;
