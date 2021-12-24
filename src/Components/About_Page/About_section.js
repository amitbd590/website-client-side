import React from "react";
import "./About.css";
import about_img from "../../image/about-1.bcfbc984.png";
import about_img2 from "../../image/bd.a5240232.png";
import Service_top_section from "../Service_Page/service_mid_section/Service_top_section";
const About_section = () => {
  return (
    <div className="about_page">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <h3>About Us</h3>
            <h2>The Best <span className='theme-color'>Travel Agency</span> Company.</h2>
            <br />

            <p>
            Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.
            </p>
            

            <li>Donec Viverra Orci On A</li>
            <li>2000+ Our worldwide guide</li>
            <li>100% trusted travel agency</li>
            <li>10+ year of travel experience</li>
          </div>
          <div className="col-lg-6 pt-5">
            <img className="img-fluid" src={about_img} alt="" />
          </div>
        </div>

        <div className="row">
            <Service_top_section></Service_top_section>
        </div>

        <div className="row mt-5 pt-5">
        
          <div className="col-lg-6">
            <img className="img-fluid" src= {about_img2} alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className='theme-color'>Our Mission & Vision</h4>
            <h2>What Oue Traveller Say About Us</h2>
            <br />

            <p>
            Suspendisse Dolor Risus, Congue Ac Diam Id, The Viverra Facilisis Dolor. Cras Nec Purus Sagittis, An Varius Tortor At, Maximus Erat. Sed At Tellus Id Foe Tellus Lobortis Dictum. Mauris Dignissim, Turpis
            </p>
            
        <br />
      
        <a href="#" className='btn btn-primary btn-lg'>Learn More</a>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_section;
