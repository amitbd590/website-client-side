import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Home/Services/Services';
import ManageCard from './ManageCard';

const ManageOrder = () => {
    return (
        <div>
            <Header></Header>

            <div className="row ">
                <div className="col m-auto">
                    <h2 className='theme-color text-center mt-5'>All Our Offer!</h2>
                </div>
            </div>
            <Services></Services>
            {/* <ManageCard></ManageCard> */}


            <Footer></Footer>
        </div>
    );
};

export default ManageOrder;