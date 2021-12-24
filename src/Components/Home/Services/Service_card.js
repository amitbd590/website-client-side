/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Service_card.css";


const Service_card = (props) => {
  const { name, Desc, image, price } = props.user;

  // Add to my order
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const desceRef = useRef();

  // Load Data from ref
  const loadData = (e) => {
    const nameData = nameRef.current.innerText;
    const imageData = imageRef.current.src;
    const priceData = priceRef.current.innerText;
    const desceData = desceRef.current.innerText;

    console.log(nameData);
    const newUser = { nameData, imageData,priceData,desceData };

    alert("Data added to your oder page");

    // API Load
    fetch("https://secret-gorge-98344.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
        }
      });
  };

  return (
    <div className="col-lg-4">
      <div className="card ">
        <img
          ref={imageRef}
          className="card-img-top"
          src={image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 ref={nameRef} className="card-title">
            Offer Name: <span className="text-danger">{name}</span>
          </h4>
          <h4 ref={priceRef} className="card-title">
            Price : ${price}
          </h4>
          <p ref={desceRef} className="card-text">
            {Desc}
          </p>
          <Link onClick={loadData} className="btn btn-primary" to="/orderPlace">
            Booking Now
          </Link>
          {/* <button className="btn btn-primary" onClick={loadData}>Booking Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Service_card;
