import React from 'react'
import Logo from '../img/logo-bg-black.png'
import './Header.css'

function Header() {
    return (

        <div className="header">
        <img src={Logo} alt="" className="logo" />
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#">My Shop</a>
          <a href="#">My Cart</a>
          <a href="#">My Profile</a>
          <button href="#">Log Out</button>
        </div>
      </div> 
    )
}

export default Header
