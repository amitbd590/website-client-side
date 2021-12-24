import React from "react";
import "./Services.css";
// import img from '../../../image/title_separate.png';
import { useEffect } from "react";
import { useState } from "react";
import Service_card from "./Service_card";


const Services = () => {

  // control user
  const [user,setUser]=useState([])
  useEffect(()=>{
      fetch('https://secret-gorge-98344.herokuapp.com/users')
      .then(res=>res.json())
      .then(data=>setUser(data))
  },[])

  return (
    <div className="container pt-5 Services">
      <div className="row">
        <div className="col text-center">
          <h2>
           Tevily is a World Leading  <span className='theme-color'>Online</span> Tour Booking Platform
          </h2>
          <img src='' alt="" />
          <p className="w-75 m-auto">
          Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
          </p>
        </div>
      </div>

      {/* Service Card  */}
      <div className="row">
      {user.map((user) => (
                <Service_card user={user} key={user._id}>
                 
                </Service_card>
              ))}
      </div>
    </div>
  );
};

export default Services;
