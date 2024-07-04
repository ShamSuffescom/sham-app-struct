import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainRouters from './Routers/MainRouters';
import runAxiosSetup from './Axios';
// import logo from './logo.svg';
import './App.css';

function App() {
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useLayoutEffect(() => {
    runAxiosSetup({ token });
  }, [token]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <MainRouters></MainRouters>
      </BrowserRouter>
    </div>
  );
}

export default App;
