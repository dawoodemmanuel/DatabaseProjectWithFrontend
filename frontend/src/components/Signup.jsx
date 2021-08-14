import React, {useState} from 'react'
import './Signup.css'
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom'

function Signup() {

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <div className="signup">
            <fieldset>
                <h1>Sign Up</h1>
                <form>
                    <label htmlFor="">User Name</label> <br />
                    <input type="text" name="UserName" placeholder="Enter your User Name" /> <br />
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
                        onChange={e => setPwd(e.target.value)} name="Password" placeholder="Enter Password" /> <br />
                    <div className="signup_button">
                        <button>Sign Up For Free</button>
                    </div>
                    <div className="sign_up">
                        <label htmlFor="">Already have an account?</label>
                        <NavLink exact activeClassName="sign_up_link" to="/Login">Log in</NavLink>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default Signup