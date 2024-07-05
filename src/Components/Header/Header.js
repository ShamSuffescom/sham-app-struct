import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import MainRouters from '../../Routers/MainRouters';
import {handleApiRequest} from '../../Services/handleApiRequest'
import * as Path from '../../Routers/MainRoutersPath';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { TbUserCircle } from "react-icons/tb";
import DeletePopup from "../Models/deletePop";
import {logoutUser} from "../../Redux/auth/thunk";

import { Modal, Button } from 'react-bootstrap';

import LoginModal from '../Models/LoginModal';
import SignupForm from '../Models/SignupForm';
import ForgetPasswordForm from '../Models/ForgetPasswordForm';
import ResetPasswordForm from '../Models/ResetPasswordForm';
import { logout } from '../../Redux/auth/slice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;
  const [userAction, setUserAction] = useState(null);

  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [showForgetPassword, setShowForgetPassword] = React.useState(false);
  const [showResetPassword, setShowResetPassword] = React.useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseForgetPassword = () => setShowForgetPassword(false);
  const handleCloseResetPassword = () => setShowResetPassword(false);
  
  const handleShowLogin = () => setShowLogin(true);

  const handleLogout = async () => {
    
    // For local stroage logout(remove data)
    dispatch(logout())
    
    // For API logout
    const response = await handleApiRequest(logoutUser);
    if (response) {
      navigate(Path.sign_in);
    }
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square btn-link rounded-0" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <Navbar expand="lg" className="bg-white sticky-top p-0">
        <Container>
          <Navbar.Brand to={Path.home} className="d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0"><i className="fa fa-car text-primary me-2"></i>Drivin</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" className="me-4" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0">
              <Link to={Path.home} className="nav-item nav-link active">Home</Link>
              <Link to={Path.about_us} className="nav-item nav-link">About</Link>
              {/* <Link to={Path.home} className="nav-item nav-link">Courses</Link> */}
              <Nav.Link href="#" className="nav-item dropdown">
                <Nav.Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{margin: '0px auto', paddingTop: '0px'}}>Pages</Nav.Link>
                <div className="dropdown-menu bg-light m-0">
                  {/* <Link to={Path.home} className="dropdown-item">Features</Link>
                  <Link to={Path.home} className="dropdown-item">Appointment</Link>
                  <Link to={Path.home} className="dropdown-item">Our Team</Link>
                  <Link to={Path.home} className="dropdown-item">Testimonial</Link> */}
                  <Link to={Path.page404} className="dropdown-item">404 Page</Link>
                </div>
              </Nav.Link>
              <Link to={Path.contact} className="nav-item nav-link">Contact</Link>
              
              {loggedinUser.data?.token ? (
                <>
                  <Link to={Path.user_profile} className="nav-item nav-link"><HiOutlineUserCircle className="react-icon pointer"/></Link>
                  <Link onClick={() => setUserAction("logout")} className="nav-item nav-link"><IoIosLogOut className="react-icon pointer"/></Link>
                </>
              ) : (
                <Link to={Path.sign_in} className="nav-item nav-link"><TbUserCircle className="react-icon pointer" /></Link>
              )}

            </Nav>
            <Link to={Path.home} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                Get Started<i className="fa fa-arrow-right ms-3"></i>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End */}
      <Container>
        <Row>
        

      <div className="container">
      {/* <Button variant="primary" onClick={handleShowLogin}>Login</Button>
      <LoginModal show={showLogin} handleClose={handleCloseLogin} /> */}


      {/* <Button variant="primary" onClick={() => setShowLogin(true)}>
        Login
      </Button> */}
      {/* <Button variant="primary" onClick={() => setShowSignup(true)}>
        Sign Up
      </Button>
      <Button variant="primary" onClick={() => setShowForgetPassword(true)}>
        Forget Password
      </Button>
      <Button variant="primary" onClick={() => setShowResetPassword(true)}>
        Reset Password
      </Button> */}

      {/* Login Modal */}
      {/* <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal />
        </Modal.Body>
      </Modal> */}

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
      </Modal>

      {/* Forget Password Modal */}
      <Modal show={showForgetPassword} onHide={handleCloseForgetPassword}>
        <Modal.Header closeButton>
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForgetPasswordForm />
        </Modal.Body>
      </Modal>

      {/* Reset Password Modal */}
      <Modal show={showResetPassword} onHide={handleCloseResetPassword}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResetPasswordForm />
        </Modal.Body>
      </Modal>
    </div>
        </Row>
      </Container>

      {userAction && (
        <DeletePopup
          action={userAction}
          setAction={setUserAction}
          onSubmit={handleLogout}
          submitLabel="Logout"
        />
      )}
    </>
  );
};

export default Header;
