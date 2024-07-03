import React from "react";
import { Routes, Route} from "react-router-dom";

import MainTheme from "../Themes/MainTheme";
import * as Path from "./MainRoutersPath"
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContectUs from "../Pages/ContactUs";
import Page404 from "../Pages/Page404";

function MainRouters(){


    return(
        <>
        {/* <Routes>
            <Route path="/" element={<MainTheme className="body-container"/>}/>
                <Route path="/" element={<Home/>} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContectUs />} />
            </Route>
        </Routes> */}
        <Routes>
            <Route path="/" element={<MainTheme className="SSS" />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path={Path.about_us} element={<AboutUs />} />
                <Route exact path={Path.contact} element={<ContectUs />} />
                <Route exact path={Path.page404} element={<Page404 />} />
            </Route>
        </Routes>
        
        </>
    );
}

export default MainRouters;