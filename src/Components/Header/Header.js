import React from "react";
import "./Header.css";
import logo from "../../image/logo-1.png";
import useFireBase from "../../Hook/FireBase/FireBase";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();

  // Realod function

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light  nav-text">
        <div className="container">
          <Link class="nav-link" to="/home">
            {" "}
            <img src={logo} alt="" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orderPlace">
                  Service
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
              {user.email ? (
                    <Link to="/myOrder" className=" nav-link ">
                      My Order
                    </Link>
                  ) : (
                    // <button onClick={logOut}>Log Out</button>

                    <Link to="/myOrder" className=" nav-link ">
                      {" "}
                      
                    </Link>
                  )}
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ADMIN
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                  {user.email ? (
                    <Link to="/addnewService" className=" dropdown-item ">
                      Add New Service
                    </Link>
                  ) : (
                    // <button onClick={logOut}>Log Out</button>

                    <Link to="/addnewService" className=" dropdown-item ">
                      Add New Service
                    </Link>
                  )}
                  {user.email ? (
                    <Link to="/manageService" className=" dropdown-item ">
                      Manage A Service
                    </Link>
                  ) : (
                    // <button onClick={logOut}>Log Out</button>

                    <Link to="/manageService" className=" dropdown-item ">
                      Manage A Service
                    </Link>
                  )}
                </div>
              </li>
            </ul>

            {user.email ? (
              <div>
                <button className="btn btn-primary mr-2" onClick={logOut}>Log Out</button>
                <span className="">{user.displayName}</span>
              </div>
            ) : (
              <Link className="btn btn-primary" to="/Register">
                Register
              </Link>
            )}
            {/* 
            {user.email ? (
              <Link to="/manage_order">
                <span className="btn btn-primary ml-2  ">Manage Order</span>
              </Link>
            ) : (
              // <button onClick={logOut}>Log Out</button>

              <Link className="btn btn-primary ml-2" to="/manage_order">
                Manage Order
              </Link>
            )} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
