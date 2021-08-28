import React, { useState } from 'react'
import './Signup.css'
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom'

function Signup() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <div className="signup">
            <fieldset>
                <h1>Sign Up</h1>
                <form>
                    <label>User Name</label> <br />
                    <input {...register("User Name", { required: true })} placeholder="Enter your User Name" onChange={(e) => { setUsername(e.target.value) }} /> <br />
                    <label>Email</label> <br />
                    <input {...register("Email", { required: true })} placeholder="Enter your Email" onChange={(e) => { setEmail(e.target.value) }} /> <br />
                    <label>Phone Number</label> <br />
                    <input {...register("Phone Number", { required: true })} placeholder="Enter your Phone Number" onChange={(e) => { setphone(e.target.value) }} /> <br />
                    <label>Address</label> <br /><br />
                    <textarea {...register("Address", { required: true })} rows="4" placeholder="Enter your Address" onChange={(e) => { setaddress(e.target.value) }} /> <br /><br />
                    <label>Password</label>
                    <img
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    /> <br />
                    <input {...register("Password", { required: true })} type={isRevealPwd ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)} name="Password" placeholder="Enter Password" /> <br />
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