import React from 'react';
import carousel_1 from '../../Assets/img/carousel-1.jpg';
import carousel_2 from '../../Assets/img/carousel-2.jpg';

const TopSliderSec = () => {
  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel_1} alt="Carousel Image 1" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">Learn To Drive With Confidence</h1>
                      <a href="#" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                      <a href="#" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel_2} alt="Carousel Image 2" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                      <a href="#" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                      <a href="#" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-car text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Easy Driving Learn</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>National Instructor</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-file-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Get Licence</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
    </div>
  );
};

export default TopSliderSec;
