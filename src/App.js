import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux'; 
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Home from './pages/dashboard/Home';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/auth/Login';
import Payment from './pages/payment/Payment';
import Orders from './pages/orders/Orders';
import SingleProduct from './components/product/SingleProduct';
import { auth } from './config/firebase';
import OfficialStores from './pages/product-stores/OfficialStores';
import 'react-toastify/dist/ReactToastify.css';
import Accessories from './pages/product-stores/Accessories';
import Phones from './pages/product-stores/Phones';
import HomeEntertainment from './pages/product-stores/HomeEntertainment';
import Gaming from './pages/product-stores/Gaming';
import Computers from './pages/product-stores/Computers';

const stripePublicKey = process.env.REACT_APP_STRIPE_API_KEY;
const promise = loadStripe(stripePublicKey);

function App() {
  const user = useSelector((state) => state.user); // Get user from state
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      dispatch({ type: 'SET_USER', user: authUser });
    });

    return () => unsubscribe(); // Clean up unsubscribe function
  }, [dispatch]);

  return (
    <Router>
      <div className="app">

        {/* Conditionally render Header based on route */}
        {window.location.pathname !== '/login' && <Header user={user} />} {/* Exclude Login page */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} /> {/* No Header/Footer */}
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/officialstores" element={<OfficialStores />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/homeEntertainment" element={<HomeEntertainment />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/computers" element={<Computers />} />
        </Routes>
        {/* Conditionally render Footer based on route */}
        {window.location.pathname !== '/login' && <Footer />}
      </div>
    </Router>
  );
}

export default App;
