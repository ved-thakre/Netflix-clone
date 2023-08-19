import React, {useRef} from 'react'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import './SignUpScreen.css'
import  auth from '../firebase';

function SignUpScreen() {

  const emailRef = useRef(null);

  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, // Use the 'auth' object
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
    
  }

  const signIn = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, // Use the 'auth' object
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser) => {
    console.log(authUser);
  }).catch(error => {
    alert(error.message);
  });
  
  }

  return (
    <div className='SignUpScreen'>
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} type="email" placeholder='Email'/>
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <button type="submit" onClick={signIn}>Submit</button>
        <h4>
          <span className='h4__span'>New to Netflix? </span> 
          <span className='h4__link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen
