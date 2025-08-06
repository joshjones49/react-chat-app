import './Login.css'

import assets from '../../assets/assets'
import { useState } from 'react'

import { signup, login } from '../../config/firebase.mjs'

const Login = () => {

    const [currentState, setCurrentState] = useState("Sign up")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if(currentState === "Sign up") {
            signup(username, email, password)
        } else {
            login(email, password)
        }
    }

  return (
    <div className='login pages' >

        <img src={assets.logo_big} alt="" className="logo" />

        <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{currentState}</h2>
            {currentState === "Sign up" ? <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='username' className="form-input" required /> : null}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='email' className="form-input" required/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password' className="form-input" required/>
            <button type='submit'>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="login-forgot">
                {
                    currentState === "Sign up"
                    ? <p className="login-toggle">Already have an account <span onClick={() => setCurrentState("Login")} >Login</span> </p>
                    : <p className="login-toggle">Create an account <span onClick={() => setCurrentState("Sign up")} >click here</span> </p>
                }
            </div>
        </form>

    </div>
  )
}

export default Login
