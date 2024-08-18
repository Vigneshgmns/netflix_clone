import React, { useState } from 'react'
import "./Login.css"
import SignIn from './SignIn'

export const Login = () => {
  const [signIn,setSignIn]=useState(false)
  return (
    <div className='login'>
      <div className="login_bg">
        <img src="/img/netflix.png" alt="" className='login_log' />

        <button onClick={()=>setSignIn(true)} className='login_but'>Sign In</button>

        <div className='login_gradient' />
      </div>
      <div className="login_body">
        {
          signIn ? (
           <SignIn/>
          ):(
              <>
             <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your membership
            </h3>
             
             <div className="login_input">
              <form>
                <input type='email' placeholder='Email Address'/>
                <button onClick={()=>setSignIn(true)} className='login_start'>GET STARTED</button>
              </form>
             </div>
              </>
            )
        }
        

      </div>
    </div>
  )
}
