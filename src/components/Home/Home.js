import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <FrequentlyAsked></FrequentlyAsked>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;