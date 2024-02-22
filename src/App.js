
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
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
    <HashRouter>
      <div className="app">
        
          <Routes>
            <Route index path='/' element={<><Header /><Home /><Footer /></>} />
            <Route path='/checkout' element={<><Header /><Checkout /><Footer /></> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /><Footer /></Elements></> } />
            <Route path='/orders' element={<><Header /><Orders /><Footer /></> } />
            <Route path="/product/:productId" element={<><Header /><SingleProduct/></>} />
 
          </Routes>
        
      </div>
      </HashRouter>
  );
}

export default App;
