import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='text-dark'>About Us</h2>
                        <p  className='text-dark'>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex.</p>
                    </div>
                    <div className="col-md-3">
                        <h2  className='text-dark'>Quick Links</h2>
                        
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Service</a></li>
                        
                    </div>
                    <div className="col-md-3">
                        <h2  className='text-dark'>Open Hours</h2>
                        <p  className='text-dark'>Opening hours definition is - the time during which a business or organization is open for customers or visitors. How to use opening hours in a sentence.</p>
                        
                    </div>
                    <div className="col-md-3">
                        <h2  className='text-dark'>Newsletter</h2>
                       <p  className='text-dark'>subscribe to our newsletter to get allour news in your inbox. open for customers or visitors. How to use opening hours in a sentence. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;