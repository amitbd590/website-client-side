import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Blue_spase from './Blue_Spase/Blue_spase';
import './Home.css'
import Services from './Services/Services';
import Special_Section from './Special Section/Special_Section';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
             <Services></Services>
            <Blue_spase></Blue_spase>
           
            <Special_Section></Special_Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;