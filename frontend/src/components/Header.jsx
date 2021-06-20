import React from 'react'
import logo from './Happy Mart.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
    return (

        <div className="header">
            <img className="header_logo" src={logo} alt="Site Logo" />
            <div className="header_search">
                <input className="header_search_input" type="text" placeholder="Search Item Here"></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_pages">
                <NavLink activeClassName="header_page_route" exact to="#">Contact</NavLink>
                <NavLink activeClassName="header_page_route" exact to="#">About Us</NavLink>
            </div>
            <div className="add-to_cart">
                <ShoppingCartIcon className="cart"></ShoppingCartIcon>
            </div>
            <div className="log_in">
                <button className="login_button">Log In</button>
            </div>
        </div>
    )
}

export default Header
