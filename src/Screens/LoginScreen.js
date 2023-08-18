import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
   const[signUp, setSignUp] = useState(false);

  return (
    <div className='loginScreen'>
         <div className="loginScreen__background">
            <img 
                className='loginScreen__logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="/"
             />
             <button className='SignIn__button' onClick={()=>setSignUp(true)}>Sign In</button>
             <div className="loginScreen__gradient"></div>
             <div className="loginScreen__body">
                {signUp ? (
                  <SignUpScreen/>
                 ) : (
                  <>
                  <h1>Unlimited films, TV programmes and more.</h1>
                  <h2>Watch anywhere, cancel anytime. </h2>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <div className="loginScreen__input">
                        <form >
                           <input type="email" placeholder='Enter you email...' />
                           <button className='loginScreen__getStarted'  onClick={()=>setSignUp(true)}>GET STARTED</button>
                        </form>
                  </div>
                  </>
                 )}
             </div>
       </div>
    </div>
  )
}

export default LoginScreen
