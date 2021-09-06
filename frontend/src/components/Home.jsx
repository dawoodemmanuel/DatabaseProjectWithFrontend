import React from 'react'
import Header from './Header'
import ItemCard from './ItemCard'
import Footer from './Footer';

const Home = () => {
    
    const isLogin = () => {
        if (localStorage.getItem('token')) {
            return true;
        }
    
        return false;
    }

    return (
        <>
        <Header />
        <br />
        <ItemCard />
        <br /><br /><br /><br /><br /><br /><br />
        <Footer />
        </>
        
    )
}
export default Home;
