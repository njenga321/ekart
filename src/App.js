
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Payment from './Payment';
import Orders from './Order.js';
import React, { useEffect } from 'react';
import "./firebase.js";
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase.js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51OYszYE0o3He6TzpkytX8z4lvabWqIGFtb0dDGg3mOgVHCmej4ChomUzHyoRDCPQNDE1yEXhjaJVcCNv3SRC2VsJ00MoTUOWh8');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        
        
        <Routes>
          <Route index path='/' element={<><Header /><Home /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></> } />
          <Route path='/login' element={<Login /> } />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></> } />
          <Route path='/orders' element={<><Header /><Orders /></> } />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
