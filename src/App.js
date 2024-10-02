import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

import SignInForm from './component/Account/SignInForm';
import SignUpForm from './component/Account/SignUpForm';

import Header from './component/Layout/Header'
import Footer from './component/Layout/Footer'

import HomePage from './component/Content/HomePage'
import ShopPage from './component/Content/ShopPage';



function App() {
  const { user } = useContext(UserContext)

  if (user) {
    return (
      <>
        <div className="container-fluid">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
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
