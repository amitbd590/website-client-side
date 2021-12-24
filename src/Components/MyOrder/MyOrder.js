import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyOrderData from './MyOrderData';

const MyOrder = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is my order</h2>
                <MyOrderData></MyOrderData>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;