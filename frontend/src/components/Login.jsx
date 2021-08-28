import React, { useState } from 'react'
import './Login.css'
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom'

function Login() {

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <div className="login">
            <fieldset>
                <h1>Log in</h1>
                <form>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" name="Email" placeholder="Enter your Email" /> <br />
                    <label htmlFor="">Password</label>
                    <img
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    /> <br />
                    <input type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={e => setPwd(e.target.value)} name="Password" placeholder="Enter your Password" /> <br />
                    <div className="status">
                        <input type="checkbox" name="status" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <NavLink exact activeClassName="forget_password_link" to="#">Forgot password?</NavLink> <br />
                    <div className="login_button">
                        <button>Log In</button>
                    </div>
                    <div className="log_in">
                        <label htmlFor="">Need an account?</label>
                        <NavLink exact activeClassName="log_in_link" to="/Signup">Sign up</NavLink>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default Login
