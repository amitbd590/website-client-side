/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MyOrderData.css";

const MyOrderData = () => {
  // control user
  const [user, setUser] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://secret-gorge-98344.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const deletDatas = (id) => {
    fetch(`https://secret-gorge-98344.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminingData = service.filter((service) => service._id !== id);
          setService(reminingData);
        }
      });
      // alert('Are you cencel order!')
  };

  return (
    <div>

      <Header></Header>


      <div className="container MyOrderData">
        {service.map((user) => (
          <div className="row mt-5 MyOrderDataWidth w-75 m-auto" user={user} key={user._id}>
            <div className="col">
              <div class="card d-flex">
                <div>
                  <img
                    class="card-img-top img-fluid"
                    src={user.imageData}
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body MyOrderDataWidth w-50">
                  <h2 class="card-title"> {user.nameData}</h2>
                  <h4 class="card-title">{user.priceData}</h4>
                  <p class="card-text">{user.desceData}</p>

                  



                  {/* <!-- Button trigger modal --> */}
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCentered">
                  Cancel Order!
                  </button>

            {/* <!-- Modal --> */}
            <div class="modal" id="exampleModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenteredLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Are You Want to Cencel This Order?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type='button' data-dismiss="modal"
                                className="btn btn-primary"
                                onClick={() => deletDatas(user._id)}
                              >
                                Cencel Order!
                              </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- */}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      <Footer></Footer>
    </div>
  );
};

export default MyOrderData;
