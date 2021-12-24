import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Not_fund_page from "./Components/404_Page/404_page";
import About_Main_Page from "./Components/About_Page/About_Main_Page";
import Home from "./Components/Home/Home";

import Login_page from "./Components/Login_Sing/Login_page";
import SingIn_page from "./Components/Login_Sing/SingIn_page";
import Manage_order from "./Components/AddNewService/AddNewService";
import Private_route from "./Components/Private_Route/Private_route";
import Service_Page from "./Components/Service_Page/Service_Main_Page";
import AuthProvider from "./Context/AuthProvider";
import AddNewService from "./Components/AddNewService/AddNewService";
import DeleteOldService from "./Components/ManageService/ManageService";
import ManageService from "./Components/ManageService/ManageService";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import MyOrder from "./Components/MyOrder/MyOrder";
import MyOrderData from "./Components/MyOrder/MyOrderData";

const App = () => {
  return (
    <div className="container-main">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Private_route exact path="/about">
              <About_Main_Page></About_Main_Page>
            </Private_route>
            <Private_route exact path="/service">
              <Service_Page></Service_Page>
            </Private_route>
            <Route exact path="/register">
              <Login_page></Login_page>
            </Route>
            <Route exact path="/singIn">
              <SingIn_page></SingIn_page>
            </Route>
            <Private_route exact path="/addnewService">
             <AddNewService></AddNewService>
            </Private_route>
            <Private_route exact path="/myOrder">
             {/* <MyOrder></MyOrder> */}
             <MyOrderData></MyOrderData>
            </Private_route>
            <Private_route exact path="/manageService">
             <ManageService></ManageService>
            </Private_route>
            <Private_route exact path="/orderPlace">
             <ManageOrder></ManageOrder>
            </Private_route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <Not_fund_page></Not_fund_page>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
