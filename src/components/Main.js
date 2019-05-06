import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container-1">
      <p className="cheers_text"></p>
      <Link 
       style={{ display: "inline-block", width: "35rem", alignSelf: "center" }}
        to="/beersList">
        <div className="beer_box">
        <img src={require('../img/beer.png')} alt='beer' className="beer_btn"/>
        </div>
      </Link>
    </div>
  );
};

export default Main;
