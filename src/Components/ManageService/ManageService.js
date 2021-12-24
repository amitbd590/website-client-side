import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ManageService = (props) => {
  // control user
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://secret-gorge-98344.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // Delete data

  const deletData = (id) => {
    fetch(`https://secret-gorge-98344.herokuapp.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminingData = service.filter((service) => service._id !== id);
          setService(reminingData);
        }
      });
  };

  // Data Slice
  

  return (
    <div>
      <Header></Header>

      <div className="userMainData w-75 m-auto">
        <h2>Total service are Available : {service.length}</h2>

        {service.map((user) => (
          <div className="row mb-4">
            <div className="col-lg-6">
              <img
                class="card-img-top img-fluid"
                src={user.image}
                alt="Card image cap"
              />
            </div>
            <div className="col-lg-6">
              <div class="card-body">
                <h4 class="card-title text-danger font-weight-bold">Service Name : {user.name}</h4>
                <p class="card-title text-muted">Total Price: ${user.price}</p>
                <p class="card-title text-muted"> ${user.Desc}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => deletData(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ManageService;
