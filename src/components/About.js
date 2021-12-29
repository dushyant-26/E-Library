import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="card bg-dark text-white h-100">
        <img className="card-img" src="about.jpg" alt="Card img" />
        <div className="card-img-overlay">
          <p className="card-text text-left c">
            <a href="/" style={{ color: "#08070D", textDecoration: "none" }}>
              &lt;back
            </a>{" "}
          </p>
          <h5 className="card-title mt-5 b">---OUR MISSION---</h5>
          <p className="card-text text-center c">
            Our main motive is to provide best quality of books to the readers
            for studies or even for their reading habbits.{" "}
          </p>
          <h5 className="card-title b">---ABOUT US---</h5>
          <p className="card-text c mx-5 text-center">
            E-Library is one of best e-learning library built to read different
            sort of books regarding studies or even for their reading
            habbits.This is built in accordance to the difficulties faced by
            most of the studets in world during this pandemic.This comes with
            preview link of all the books available online and if you need to
            read the complete book, you need to buy the subscription. This
            website is totally made of react and bootstrap and it is fast due to
            feature of react being so fast. For the data of various books,this
            website is taking the data from google book api using superagent
            which is one of best ajax API to fetch data easily and efficiently.
          </p>
        </div>
      </div>
    );
  }
}
