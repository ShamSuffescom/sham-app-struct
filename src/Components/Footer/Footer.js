import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <Container>
          <Row className="g-5">
            <Col lg={3} md={6}>
              <h4 className="text-white mb-4">Get In Touch</h4>
              <h2 className="text-primary mb-4"><i className="fa fa-car text-white me-2"></i>Drivin</h2>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Our Services</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="text-light mb-4">Popular Links</h4>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Our Services</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="text-light mb-4">Newsletter</h4>
              <Form action="">
                <InputGroup>
                  <Form.Control type="text" className="p-3 border-0" placeholder="Your Email Address" />
                  <Button variant="primary">Sign Up</Button>
                </InputGroup>
              </Form>
              <h6 className="text-white mt-4 mb-3">Follow Us</h6>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-outline-light me-0" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">e-commerse</a>, All Right Reserved.
            </Col>
            <Col md={6} className="text-center text-md-end">
              Designed By <a href="$">Suffescom</a>
              <br />
              Distributed By: <a href="#" target="_blank" rel="noopener noreferrer">Suffescom</a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Copyright End */}
    </>
  );
};

export default Footer;
