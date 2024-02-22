import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(); 

    const signIn = e => {
         e.preventDefault();

         // firebase login
         signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            //successful created a new user with email and password
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            //successful created a new user with email and password
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }


  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src="https://i.ibb.co/fG0RrCN/Ekart-black.png" alt="Ekart" border="0" />
        </Link>

        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login_signinButton'>Sign In</button>
            </form>
            
                <p>
                By continuing, you agree to Ekart's Conditions of Use and Privacy Notice.
                </p>
                <div className='login_registerdiv'>
                    <p><small>New to Ekart?</small></p>
                    <button onClick={register} className='login_registerbutton'>Create your Ekart account</button>
                </div>
        </div>


    </div>
  )
  }

export default Login