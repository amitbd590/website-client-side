/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './Speciel_section.css'
import img from '../../../image/about-one-img-1.png'
import icon_bar from "../../../image/title_separate.png";
import Blue_spase_data from "../Blue_Spase/Blue_spase_data";
const Special_Section = () => {
  return (
    <div>
      <div className="container mt-5 Speciel_section">
        <div className="text-center mb-5">
          <h2>Go <span className='theme-color'>Exotic</span> Places</h2>
          <img src={icon_bar} alt="" />
          <h4>Plan Your Trip with Trevily</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="img-overlay">
              <h2 className='theme-color'>30% <br/> Discount!</h2>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="wrap">
              <h2 className='mt-5 '>Plan Your Trip with <span className='theme-color'>Trevily</span></h2>
              <p className='text-muted'> There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

              <div className='mt-3'>
                <ul >
                  <li className='text-muted'>Invest in your simply neighborhood</li>
                  <li className='text-muted'>Support people in free text extreme need</li>
                  <li className='text-muted'>Largest global industrial business community</li>
                </ul>
              </div>
              <button className='btn btn-primary mt-2'>BOOK WITH US NOW</button>
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Special_Section;
