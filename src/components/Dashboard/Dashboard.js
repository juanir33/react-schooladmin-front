import React from "react";


import NavBar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import MainDash from "../MainDash/MainDash";
import news from "../../constants/news";
import ProfileCard from "../ProfileCard/ProfileCard";
import { Card } from "react-bootstrap";

const nuevas = news.map( ne => {return (<Cards titulo= {ne.title} texto= {ne.text} boton= {ne.buton}/>)})
    console.log(nuevas);
const Dashboard = ({children}) => {
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="d-flex flex-column w-100 nav">
        <NavBar />
        <div className="main-content d-flex w-100 justify-content-center flex-wrap">
         {children} 
        
        
        
          
        </div>
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
