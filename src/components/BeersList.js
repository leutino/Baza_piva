import React, { Component } from "react";
import { Link } from "react-router-dom";
import getBeersForPage from "../Api";
import Search from "./Search";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

class BeersList extends Component {
  state = {
    beers: [],
    filteredBeers: [],
    beer: null
  };

  componentDidMount() {
    [5,4,3,2,1].map(i =>
      getBeersForPage(i).then(data => {
        console.log(data);
        console.log(this.state.beers);
        this.setState({
          beers: [...data, ...this.state.beers],
          filteredBeers: [...data, ...this.state.filteredBeers]
        });
      })
    );
  }

  onBeerClicked = beer => {
    this.setState({
      beer
    });
  };

  searchFilter = event => {
    let inputValue = event.target.value;
    let newBeers = this.state.beers.filter(beer =>
      `${beer.name}`.toLowerCase().includes(inputValue.toLowerCase())
    );
    this.setState({
      filteredBeers: newBeers
    });
    // console.log(newBeers);
  };

  render() {
    // console.log(this.state);
    const { beer } = this.state;
    console.log(beer);
    return (
      <div>
        <Header />
        <div className="container-2">
          <div className="btn_search">
            <Link to="/">
              <button className="button">Go back</button>
            </Link>
            <Search
              searchFilter={this.searchFilter}
              inputValue={this.state.inputValue}
            />
          </div>
          <div className="list_of_beers" id="listOfBeers">
            <ul className="beers_list">
              {this.state.filteredBeers.map(beer => {
                return (
                  <li key={beer.id}>
                    <div className="beer_info">
                      <h2 className="beer_list-name">{beer.name}</h2>
                      <div className="beer_img-box">
                        <img
                          alt="beer"
                          className="beer_img"
                          src={
                            beer.image_url
                              ? beer.image_url
                              : require("../img/no-img.png")
                          }
                        />
                      </div>
                      <a
                        href="#popup"
                        className="beer_info-btn"
                        onClick={() => this.onBeerClicked(beer)}
                      >
                        Click here
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            {beer && (
              <div className="popup" id="popup" key={beer.id}>
                <div className="popup_content">
                  <a href="#listOfBeers" className="popup_close">
                    &times;
                  </a>
                  <div className="beer_info-popup">
                    <div className="beer_info-box">
                      <h2>{beer.name}</h2>
                      <p><b>Description:</b> {beer.description}</p>
                      <p><b>Alcohol:</b> {beer.abv}%</p>
                      <p><b>pH:</b> {beer.ph}</p>
                      <p><b>Color intensity (SRM):</b> {beer.srm}</p>
                      <p><b>Bitterness (IBU):</b> {beer.ibu}</p>
                      <p>
                        <b>Fermentation:</b> at {beer.method.fermentation.temp.value}
                        °C
                      </p>
                      <p>
                        <b>Serve it with:</b> {beer.food_pairing.join("; ")}.
                      </p>
                      <p>
                        <b>User experience:</b> {beer.tagline}
                      </p>
                    </div>
                    <div className="beer_img-cont">
                      <img
                        alt="beer"
                        className="beer_img-popup"
                        src={
                          beer.image_url
                            ? beer.image_url
                            : require("../img/no-img.png")
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BeersList;
