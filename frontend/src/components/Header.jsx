import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../image/logo-bg-black.png'
import './Header.css'

function Header() {

    return (

        <div className="header">
        <img src={Logo} alt="" className="logo" />
        <div class="header-right">
          <a class="active" href="home">My Shop</a>
          <a href="My Cart">My Cart</a>
          <Link to={"Login"}>Log In</Link>
          <Link to={"Signup"}>Sign Up</Link>
        </div>
      </div> 
    )
}

export default Header
