import React from "react";

const Header = () => {
  
  return (
    <div className="header">
      <img src={require('../img/beer_left.png')} alt='beer' className='beer_left'/>
      <h1 className="header_heading">Beers!</h1>
      <img src={require('../img/beer_right.png')} alt='beer' className='beer_right'/>
    </div>
  );
};

export default Header;
