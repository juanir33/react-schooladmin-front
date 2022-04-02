import React from "react";

import { Tables } from "../Tables/Table";
import NavBar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import MainDash from "../MainDash/MainDash";
import news from "../../constants/news";

const nuevas = news.map( ne => {return (<Cards titulo= {ne.title} texto= {ne.text} boton= {ne.buton}/>)})
    console.log(nuevas);
const Dashboard = ({ children }) => {
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100 nav">
        <NavBar />
        <div className="main-content d-flex w-100 justify-content-center flex-wrap">
          
          
          <MainDash children={nuevas}  />
          
        </div>
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
