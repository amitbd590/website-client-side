import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner d-flex ">
        <div className="container">
          <h2 className="primary-font-size">Where Would You Like To Go?</h2>
          <h1 className="second-font-size">
          Plan Your Trip with  <br></br> <span className='theme-color'>Trevily</span>
          </h1>
          <p className=" text-light display-5">
          There are many variations of passages of available but the majority have suffered alteration in some form, <br/> by injected hum randomised words which don't look even slightly.
          </p>
          <a href="#" className="btn btn-primary mt-4">
            Learn More
          </a>
        </div>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default Banner;
