import React from "react";
import "./Blue_spase.css";
import Blue_spase_data from "./Blue_spase_data";
import blue_1 from '../../../image/blue-1.png';
import blue_2 from '../../../image/blue-2.png';
import blue_3 from '../../../image/blue-3.png';
import blue_4 from '../../../image/blue-4.png';


const Blue_spase = () => {
  return (
    <div className=" Blue_spase ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Blue_spase_data img={blue_1}></Blue_spase_data>
          </div>
          <div className="col-md-3">
            <Blue_spase_data img={blue_2}></Blue_spase_data>
          </div>
          <div className="col-md-3">
            <Blue_spase_data img={blue_3}></Blue_spase_data>
          </div>
          <div className="col-md-3">
            <Blue_spase_data img={blue_4}></Blue_spase_data>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Blue_spase;
