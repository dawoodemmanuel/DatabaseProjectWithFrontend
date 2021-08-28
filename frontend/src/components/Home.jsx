import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer';
import './Card.css'
import Card from './Card'
import CardList from './CardList';

const Home = () => {
    const [CardData, setCardData] = useState(CardList);
    return (
        <>
        <Header />
        <Card CardData={CardData} />
        <Footer />
        </>
    )
}
export default Home;
