import React from "react";
import "./Blue_spase_data.css";
const Blue_spase_data = (props) => {
    const {img}=props;
  return (
    <div>
      <div className="main_card text-center">
          <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Blue_spase_data;
