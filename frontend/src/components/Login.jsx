import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <fieldset>
                <h1 className="heading">Log in</h1>
                <div className="form">
                    <label className="label" htmlFor="">Email</label> <br />
                    <input className="input_email" type="text" placeholder="Enter your Email" /> <br /><br />
                    <label className="label" htmlFor="">Password</label> <br />
                    <input className="input_password" type="password" placeholder="Enter your Password" />
                </div>
                <div className="forget_password">
                    <NavLink activeClassName="forget_password_link" to="#">Forgot password?</NavLink>
                </div>
                <div className="login_button">
                    <button>Log In</button>
                </div>
                <div className="sign_up">
                    <label htmlFor="">Need an account?</label>
                    <NavLink activeClassName="sign_up_link" to="#">Sign up</NavLink>
                </div>

            </fieldset>
        </div>
    )
}

export default Login
