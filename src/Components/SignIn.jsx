import React, { useRef } from 'react'
import "./SignIn.css"
import { auth } from "../firebase"

const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

   const register=(e)=>{
     e.preventDefault()

   }

   const signin =(e)=>{
     e.preventDefault()
     
     auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
     ).then((authUser)=>{
        console.log(authUser)
     }).catch((error)=>{
        alert(error.message)
    })
   }

    return (
        <div className='signIn'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type='submit' onClick={signin}>Sign In</button>

                <h4>
                 <span className='signup_text'>New to Netflix?</span>
                 <span className='signup_link' onClick={register}> Sign Up now.</span>
                 </h4>
            </form>
        </div>
    )
}

export default SignIn
