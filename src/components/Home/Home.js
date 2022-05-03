import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';
import Inventories from '../Inventories/Inventories';
import Loading from '../Loading/Loading';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
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