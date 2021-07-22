import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide slider container" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="carousel1.jpg" className="d-block imgSlider" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>ONLINE BOOK LIBRARY</h1>
              <h5>Perfect Solution For Library Management</h5>
              <Link to='/about'>
                <button className="btn btn-lg para">More Info</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="carousel2.jpg" className="d-block imgSlider" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>ONLINE BOOK LIBRARY</h1>
              <h5>Perfect Solution For Library Management</h5>
              <Link to='/about'>
                <button className="btn btn-lg para">More Info</button>
              </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}
