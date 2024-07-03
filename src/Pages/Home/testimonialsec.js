import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimonial1 from '../../Assets/img/testimonial-1.jpg';
import testimonial2 from '../../Assets/img/testimonial-2.jpg';
import testimonial3 from '../../Assets/img/testimonial-3.jpg';

const TestimonialSec = () => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
          <h1 className="display-6 mb-4">What Our Clients Say!</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src={testimonial1}
                      alt="Client"
                      style={{ width: '100px', height: '100px' }}
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-4">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src={testimonial2}
                      alt="Client"
                      style={{ width: '100px', height: '100px' }}
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-4">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src={testimonial3}
                      alt="Client"
                      style={{ width: '100px', height: '100px' }}
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-4">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSec;
