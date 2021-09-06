import React, { useState } from 'react'
import './Signup.css'
import Axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom'
import Header from './Header';

function Signup(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const eye = <FontAwesomeIcon icon={faEye} />;
    const [password, setPassword] = useState(false);
    const togglePasswordVisiblity = () => {
        setPassword(password ? false : true);
    };

    const SignUp = (data, e) => {
        e.preventDefault();
        e.target.reset();
        Axios.post("http://localhost:3001/signup", {
            username: data.UserName,
            email: data.Email,
            phone: data.PhoneNumber,
            address: data.Address,
            password: data.Password,
        }).then((response) => {
            if (response.data === true) {
                alert("Data is Added Successfully");
                props.history.push("/Login")
            } else {
                alert("This Email is Alredy Exists, Try Again")
            }
        });

    }

    // const handleSignUp = () => {
    //     props.history.push('/Home');
    // }

    return (
        <>
            <Header />
            <div className="signup">
                <fieldset>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit(SignUp)}>
                        <label>User Name</label> <br />
                        <input {...register("UserName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })} placeholder="Enter your User Name" />
                        {errors?.UserName?.type === "required" && <p>This field is required</p>}
                        {errors?.UserName?.type === "maxLength" && (
                            <p>User name cannot exceed 20 characters</p>
                        )}
                        {errors?.UserName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                        <br />
                        <label>Email</label> <br />
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
                        <label>Phone Number</label> <br />
                        <input {...register("PhoneNumber", {
                            required: true,
                            maxLength: 11,
                            minLength: 10,
                            pattern: /^[0-9]+$/
                        })} placeholder="Enter your Phone Number" />
                        {errors?.PhoneNumber?.type === "required" && <p>This field is required</p>}
                        {errors?.PhoneNumber?.type === "pattern" && (
                            <p>Only Digits From 0-9</p>
                        )}
                        {errors?.PhoneNumber?.type === "minLength" && (
                            <p>Phone Number should be equal to 10 or 11 Digits</p>
                        )}
                        {errors?.PhoneNumber?.type === "maxLength" && (
                            <p>Phone Number should be equal to 10 or  11 Digits</p>
                        )}
                        <br />
                        <label>Address</label> <br /><br />
                        <textarea {...register("Address", {
                            required: true,
                        })} rows="4" placeholder="Enter your Address" />
                        {errors?.Address?.type === "required" && <p>This field is required</p>}
                        <br /><br />
                        <label>Password</label>
                        <i className="eyeLogo" onClick={togglePasswordVisiblity}>{eye}</i>
                        <br />
                        <input {...register("Password", {
                            required: true,
                            minLength: 8
                        })} type={password ? "text" : "password"}
                            placeholder="Enter Password" />
                        {errors?.Password?.type === "required" && <p>This field is required</p>}
                        {errors?.Password?.type === "minLength" && (
                            <p>Password cannot be less than 8 characters</p>
                        )}
                        <br />
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
        </>
    )
}


export default Signup