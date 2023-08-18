import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {
  return (
    <div className='SignUpScreen'>
      <form>
        <h1>Sign Up</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpScreen
