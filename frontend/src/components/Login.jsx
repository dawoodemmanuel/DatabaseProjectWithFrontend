import React, { useState } from 'react'
import './Login.css'
import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom'
import Header from './Header'

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [pwd, setPwd] = useState(false);

    const Eye = <FontAwesomeIcon icon={faEye} />;

    const togglePasswordVisiblity = () => {
        setPwd(pwd ? false : true);
    };

    const LogIn = (data, e) => {
        e.preventDefault();
        e.target.reset();
        Axios.post("http://localhost:3001/login", {
            email: data.Email,
            password: data.Password,
        }).then((response) => {
            if (response.data === true) {
                alert("Login SuccessFull");
                localStorage.setItem('token', response.token);
            } else {
                alert(response.data)
            }
        });

    }

    return (
        <>
            <Header />
            <div className="login">
                <fieldset>
                    <h1>Log in</h1>
                    <form onSubmit={handleSubmit(LogIn)}>
                        <label htmlFor="">Email</label> <br />
                        <input {...register("Email", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })} placeholder="Enter your Email" />
                        {errors?.Email?.type === "required" && <p>This field is required</p>}
                        {errors?.Email?.type === "maxLength" && (
                            <p>Email cannot exceed 50 characters</p>
                        )}
                        {errors?.Email?.type === "pattern" && (
                            <p>Enter valid Email</p>
                        )}
                        <br />
                        <label>Password</label>
                        <i className="logoEye" onClick={togglePasswordVisiblity}>{Eye}</i>
                        <br />
                        <input {...register("Password", {
                            required: true,
                            minLength: 8
                        })} type={pwd ? "text" : "password"}
                            placeholder="Enter Password" />
                        {errors?.Password?.type === "required" && <p>This field is required</p>}
                        {errors?.Password?.type === "minLength" && (
                            <p>Password cannot be less than 8 characters</p>
                        )}
                        {/* <div className="status">
                        <input type="checkbox" name="status" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <NavLink exact activeClassName="forget_password_link" to="#">Forgot password?</NavLink> <br /> */}
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
        </>
    )
}

export default Login
